import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebaseConfig";
import UserTableBody from "./UserTableBody";
import useDelete from "../../../CustomHooks/useDelete";
import Swal from "sweetalert2";
import useFetchMyOrders from "../../../CustomHooks/useFetchMyOrders";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const {
        isLoading,
        error: isError,
        data,
        isFetching,
    } = useFetchMyOrders(
        `https://aqueous-anchorage-06068.herokuapp.com/api/order/fetch-orders/${user?.email}`
    );
    const {
        orderDeleteRequest,
        loading: deleteLoading,
        error: deleteError,
        data: deleteData,
    } = useDelete();
    const navigate = useNavigate();
    const alert = useAlert();
    if (loading || isLoading || deleteLoading) {
        return <p>Loading..</p>;
    }
    if (error) {
        alert.error(error.message);
    }
    if (isError) {
        alert.error(isError.message);
    }
    if (deleteError) {
        // console.log(deleteError.message);
        alert.error(deleteError.message);
    }

    const makePayment = (_id) => {
        console.log("payment method", _id);
        navigate(`/payment/${_id}`);
    };
    const deleteOrder = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                orderDeleteRequest(
                    `https://aqueous-anchorage-06068.herokuapp.com/api/order/delete-order/${_id}`
                );

                Swal.fire("Deleted!", "Order has been deleted.", "success");
            }
        });
    };
    return (
        <div class="overflow-x-auto">
            <table class="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Order Id</th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Payment Satus</th>
                        <th>Transaction</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((data, index) => {
                        return (
                            <UserTableBody
                                key={data._id}
                                index={index}
                                data={data}
                                deleteOrder={deleteOrder}
                                makePayment={makePayment}
                            />
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Order Id</th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Payment Satus</th>
                        <th>Transaction</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default MyOrders;
