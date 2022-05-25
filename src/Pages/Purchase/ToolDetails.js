import React from "react";
import auth from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import usePost from "../../CustomHooks/usePost";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const ToolDetails = ({ data }) => {
    const { name, description, min, _id, quantity, photo, price } = data;
    const [user, loading, error] = useAuthState(auth);
    const {
        loading: postLoading,
        error: postError,
        data: postData,
        savePurchaseData,
    } = usePost(`http://localhost:5000/api/create-order`);
    const schema = yup.object().shape({
        address: yup.string().required(),
        name: yup.string().required(),
        address: yup.string().required(),

        phone: yup.string().required(),
        orderQuantity: yup
            .number()
            .positive()
            .integer()
            .min(min)
            .max(quantity)
            .required(),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();
    const purchaseData = {};
    const onSubmit = (data) => {
        // console.log(data);
        purchaseData.productName = name;
        purchaseData.productId = _id;
        purchaseData.quantity = data.orderQuantity;
        purchaseData.price = data.orderQuantity * price;
        purchaseData.address = data.address;
        purchaseData.phone = data.phone;
        purchaseData.name = data.name;
        purchaseData.email = data.email;

        savePurchaseData(purchaseData);
    };
    if (loading || postLoading) {
        return <p>Loading...</p>;
    }
    if (errors) {
        console.log(errors);
    }
    if (postError) {
        console.log(postError.message);
    }
    if (postData) {
        console.log(postData);
        Swal.fire("Purchase data store successful");
        navigate("/dashboard/my-orders");
    }
    return (
        <div className="container w-full md:w-[60%] mx-auto my-5 p-2">
            <div className=" p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 items-center">
                    <img
                        src={photo}
                        alt=""
                        className="object-cover object-center w-full rounded-md h-80 md:max-w-md bg-gray-500"
                    />
                    <div>
                        <div className="mt-6 mb-2">
                            <h2 className="text-xl font-semibold tracking-wide">
                                {name}
                            </h2>
                        </div>
                        <p className="text-gray-800">{description}</p>
                        <div className="mt-2">
                            <section className="  text-gray-800">
                                <div className="flex justify-between">
                                    <div className="flex flex-col justify-start text-center ">
                                        <p className="text-xl font-bold leading-none ">
                                            {quantity}
                                        </p>
                                        <p className="text-sm sm:text-base">
                                            Available
                                        </p>
                                    </div>

                                    <div className="flex flex-col justify-start text-center">
                                        <p className="text-xl font-bold leading-none ">
                                            {min}
                                        </p>
                                        <p className="text-sm sm:text-base">
                                            Min. Order
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-start text-center">
                                        <p className="text-xl font-bold leading-none ">
                                            {price}
                                        </p>
                                        <p className="text-sm sm:text-base">
                                            Unit Price
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <form
                            className="flex flex-col space-y-3 my-5"
                            onSubmit={handleSubmit(onSubmit)}>
                            <label className="block">
                                <span className="mb-1">Order Quantity</span>
                                <input
                                    name="orderQuantity"
                                    type="number"
                                    value={min}
                                    // readOnly={false}
                                    {...register("orderQuantity")}
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                                />
                                <p className="text-red-900">
                                    {errors?.orderQuantity &&
                                        `Order quantity is required and must be in range ${min} to ${quantity}`}
                                </p>
                            </label>
                            <label className="block">
                                <span className="mb-1">Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    {...register("name")}
                                    value={user?.displayName}
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                                />
                                <p className="text-red-900">
                                    {errors?.name?.message}
                                </p>
                            </label>
                            <label className="block">
                                <span className="mb-1">Email address</span>
                                <input
                                    type="email"
                                    name="email"
                                    {...register("email")}
                                    value={user?.email}
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                                />
                            </label>
                            <label className="block">
                                <span className="mb-1">Phone Number</span>
                                <input
                                    type="string"
                                    name="phone"
                                    {...register("phone")}
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                                />

                                <p className="text-red-900">
                                    {errors?.phone?.message}
                                </p>
                            </label>
                            <label className="block">
                                <span className="mb-1">Address</span>
                                <input
                                    type="string"
                                    name="address"
                                    {...register("address")}
                                    placeholder="Enter your address"
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                                />
                                <p className="text-red-900">
                                    {errors?.address?.message}
                                </p>
                            </label>

                            <button
                                type="submit"
                                // disabled={errors ? "true" : ""}
                                className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-pink-600 text-gray-50 focus:ring-pink-600 hover:ring-pink-600">
                                Purchase
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolDetails;
