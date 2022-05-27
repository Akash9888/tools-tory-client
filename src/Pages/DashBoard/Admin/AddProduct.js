import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Loader from "../../../Components/Loader";
import usePost from "../../../CustomHooks/usePost";
import { useAlert } from "react-alert";
let schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    quantity: yup.number().positive().integer().required(),
    min: yup.number().positive().integer().required(),
    price: yup.number().positive().integer().required(),
    photo: yup.string().url().required(),
});
const AddProduct = () => {
    const {
        savePostData,
        loading,
        error,
        data: createData,
    } = usePost(
        `https://aqueous-anchorage-06068.herokuapp.com/api/tool/create-tool`
    );
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const alert = useAlert();
    const storeProduct = (data, e) => {
        console.log(data);
        savePostData(data);
        e.target.reset();
    };
    if (error) {
        console.log(error.message);
    }
    if (loading) {
        return <Loader />;
    }
    if (createData) {
        alert.success("New tool added successfully");
    }
    return (
        <div className="container w-full md:w-[50%] mx-auto my-5 p-2">
            <section className="p-2 text-gray-800">
                <form
                    onSubmit={handleSubmit(storeProduct)}
                    novalidate=""
                    className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-300 ng-untouched ng-pristine ng-valid">
                    <h2 className="w-full text-3xl text-center font-bold leading-tight">
                        Add Tool
                    </h2>
                    <div>
                        <label
                            for="name"
                            className="block  
">
                            Tool Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter product name"
                            {...register("name")}
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                        />
                        <p className="text-red-700">{errors.name?.message}</p>
                    </div>
                    <div>
                        <label
                            for="name"
                            className="block  
">
                            Tool Description
                        </label>
                        <input
                            name="description"
                            type="text"
                            placeholder="Enter product Description"
                            {...register("description")}
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                        />{" "}
                        <p className="text-red-700">
                            {errors.description?.message}
                        </p>
                    </div>
                    <div>
                        <label
                            for="name"
                            className="block  
">
                            Tool Image
                        </label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Your name"
                            {...register("photo")}
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                        />
                        <p className="text-red-700">{errors.photo?.message}</p>
                    </div>
                    <div>
                        <label
                            for="name"
                            className="block  
">
                            Tool Quantity
                        </label>
                        <input
                            name="quantity"
                            type="number"
                            placeholder="Enter product quantity"
                            {...register("quantity")}
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                        />{" "}
                        <p className="text-red-700">
                            {errors.quantity && "Please enter valid number"}
                        </p>
                    </div>
                    <div>
                        <label
                            for="name"
                            className="block  
">
                            Unit Price
                        </label>
                        <input
                            name="price"
                            type="number"
                            placeholder="Enter Unit price"
                            {...register("price")}
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                        />
                        <p className="text-red-700">
                            {errors.price && "Please enter valid number"}
                        </p>
                    </div>
                    <div>
                        <label
                            for="name"
                            className="block  
">
                            Minimum Order
                        </label>
                        <input
                            name="min"
                            type="number"
                            placeholder="Enter minimum order quantity"
                            {...register("min")}
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                        />
                        <p className="text-red-700">
                            {errors.min && "Please enter valid number"}
                        </p>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-pink-600 focus:ring-pink-600 hover:ring-pink-600 text-gray-50">
                            Add Tool
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;
