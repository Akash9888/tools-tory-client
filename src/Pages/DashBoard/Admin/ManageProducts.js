import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Loader from "../../../Components/Loader";
import useDelete from "../../../CustomHooks/useDelete";
import AdminProductTableBody from "../User/AdminProductTableBody";

const ManageProducts = () => {
    const { isLoading, error, data, isFetching } = useQuery(
        "fetch-product",
        () => {
            return axios.get(`http://localhost:5000/api/fetch-tools-delete`);
        },
        {
            refetchInterval: 3000,
            // refetchOnWindowFocus: true,
        }
    );
    const {
        orderDeleteRequest: productsDeleteRequest,
        loading: deleteLoading,
        error: deleteError,
        data: deleteData,
    } = useDelete();
    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        console.log(error.message);
    }
    if (deleteError) {
        console.log(deleteError.message);
    }
    const deleteProduct = (_id) => {
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
                productsDeleteRequest(
                    `http://localhost:5000/api/delete-product/${_id}`
                );

                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };
    return (
        <div class="overflow-x-auto">
            <table class="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                        <th>Unit Price</th>
                        <th>Minimum Order</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((data, index) => {
                        return (
                            <AdminProductTableBody
                                key={data._id}
                                index={index}
                                data={data}
                                deleteProduct={deleteProduct}
                            />
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                        <th>Unit Price</th>
                        <th>Minimum Order</th> <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ManageProducts;
