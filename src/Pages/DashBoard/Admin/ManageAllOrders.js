import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Loader from "../../../Components/Loader";
import useUpdate from "../../../CustomHooks/useUpdate";
import ManageOrderTableBody from "./ManageOrderTableBody";

const ManageAllOrders = () => {
    const { isLoading, error, data, isFetching } = useQuery(
        "fetch-manage-orders",
        () => {
            return axios.get(`http://localhost:5000/api/fetch-orders-manage`);
        },
        {
            refetchInterval: 3000,
            // refetchOnWindowFocus: true,
        }
    );
    const {
        saveupdatedData,
        loading,
        error: updateError,
        data: updateData,
    } = useUpdate();
    if (isLoading || loading) {
        return <Loader />;
    }
    if (error) {
        console.log(error.message);
    }
    if (updateError) {
        console.log(updateError.message);
    }
    const manageOrders = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Change it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // productsDeleteRequest(
                //     `http://localhost:5000/api/delete-product/${_id}`
                // );

                saveupdatedData(
                    `http://localhost:5000/api/update-single-order/${_id}`,
                    {
                        status: "shipped",
                    }
                );
                Swal.fire("Shipped!", "Change Status.", "success");
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

                        <th>Status</th>
                        <th>User Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((data, index) => {
                        return (
                            <ManageOrderTableBody
                                key={data._id}
                                index={index}
                                data={data}
                                manageOrders={manageOrders}
                            />
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Order Id</th>
                        <th>Product Id</th>
                        <th>Product Name</th> <th>Status</th>
                        <th>User Email</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ManageAllOrders;
