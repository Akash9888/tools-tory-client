import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";
import useUpdate from "../../CustomHooks/useUpdate";
import Loader from "../../Components/Loader";
import CheckOut from "./CheckOut";

const Payment = () => {
    const params = useParams();
    const { isLoading, error, data, isFetching } = useFetch(
        `https://aqueous-anchorage-06068.herokuapp.com/api/order/fetch-single-order/${params._id}`
    );
    const {
        saveupdatedData,
        loading,
        error: upError,
        data: UpData,
    } = useUpdate();
    const navigate = useNavigate();
    const [transactionId, setTransactionId] = useState(null);

    if (isLoading || loading) {
        return <Loader />;
    }
    if (error) {
        console.log(error.message);
    }
    // if (UpData) {
    //     navigate("dashboard/my-orders");
    // }

    const backOrderPage = async () => {
        saveupdatedData(
            `https://aqueous-anchorage-06068.herokuapp.com/api/order/update-single-order/${params._id}`,
            { status: "pending", transaction: transactionId }
        );
        navigate("/dashboard/my-orders");
    };
    return (
        <div className="container w-full md:w-[50%] mx-auto my-5 p-2">
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800">
                <ul className="flex flex-col divide-y divide-gray-300">
                    {" "}
                    <h2 className="text-xl font-semibold mb-5">
                        Product Details
                    </h2>
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img
                                className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                                src={data?.data[0]?.photo}
                                alt="product image"
                            />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                            {data?.data[0]?.productName}
                                        </h3>
                                        <p className="text-lg text-gray-600 mt-3">
                                            Order Quantity:{" "}
                                            <span className="text-lg text-pink-700">
                                                {data?.data[0]?.quantity}
                                            </span>
                                        </p>
                                        <p className="text-lg text-gray-600 mt-3">
                                            Unit Price:{" "}
                                            <span className="text-lg text-pink-700">
                                                {data?.data[0]?.unitPrice}
                                            </span>{" "}
                                            $
                                        </p>
                                        <p className="text-lg text-gray-600 mt-3">
                                            Total:{" "}
                                            <span className="text-lg text-pink-700">
                                                {data?.data[0]?.totalPrice}
                                            </span>
                                            $
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="">
                        <h2 className="mt-5 text-xl font-semibold">
                            Shipping Address
                        </h2>
                        <div className="mt-5">
                            <h3 className="text-lg font-semibold leading-snug mt-2">
                                Name:{" "}
                                <span className="text-lg text-pink-700">
                                    {" "}
                                    {data?.data[0]?.name}
                                </span>
                            </h3>
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8 mt-2">
                                Email:{" "}
                                <span className="text-lg text-pink-700">
                                    {" "}
                                    {data?.data[0]?.email}
                                </span>
                            </h3>
                            <h3 className="text-lg font-semibold leading-snug mt-2">
                                Phone:{" "}
                                <span className="text-lg text-pink-700">
                                    {" "}
                                    {data?.data[0]?.phone}
                                </span>
                            </h3>
                            <h3 className="text-lg font-semibold leading-snug mt-2">
                                Address:{" "}
                                <span className="text-lg text-pink-700">
                                    {" "}
                                    {data?.data[0]?.address}
                                </span>
                            </h3>
                        </div>
                    </li>
                    <li>
                        <div className="space-y-1 text-center">
                            <p className="text-base my-5">
                                Payable Amount:
                                <span className="font-semibold">
                                    {" "}
                                    {data?.data[0]?.totalPrice}
                                </span>{" "}
                                $
                            </p>
                        </div>

                        <CheckOut
                            setTransactionId={setTransactionId}
                            id={params._id}
                            totalPrice={data?.data[0]?.totalPrice}
                        />
                        {transactionId && (
                            <div id="payment-message" className="text-teal-800">
                                Payment successful. Transaction ID:{" "}
                                <span className="   text-yellow-600 font-semibold">
                                    {transactionId}
                                </span>
                            </div>
                        )}
                    </li>
                </ul>
                <div>
                    <button
                        disabled={!transactionId}
                        class="btn btn-outline btn-info"
                        onClick={backOrderPage}>
                        Back to orders page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
