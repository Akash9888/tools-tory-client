import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Loader from "../../../Components/Loader";
import useUpdate from "../../../CustomHooks/useUpdate";
import { useAlert } from "react-alert";

let schema = yup.object().shape({
    email: yup.string().email().required(),
});
const MakeAdmin = () => {
    const { saveupdatedData, loading, error, data } = useUpdate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const makeAdmin = (data) => {
        console.log(data);
        saveupdatedData(
            `https://aqueous-anchorage-06068.herokuapp.com/api/user/make-admin/${data.email}`,
            {
                role: "admin",
            }
        );
    };
    const alert = useAlert();
    if (loading) {
        return <Loader />;
    }
    if (error) {
        console.log(error.message);
    }
    if (data) {
        alert.success("Admin");
        console.log(data);
    }
    return (
        <div className="container w-full md:w-[50%] mx-auto my-5 p-2">
            <div className="flex flex-col max-w-xl p-8 card  bg-gray-300 shadow-xl rounded-xl lg:p-12 text-gray-800">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">
                        Make New Admin
                    </h2>

                    <div className="flex flex-col w-full">
                        <form onSubmit={handleSubmit(makeAdmin)}>
                            <label for="email" className="block text-black">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                {...register("email")}
                                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                            />
                            <p className="text-red-700">
                                {errors.email?.message}
                            </p>
                            <button
                                type="submit"
                                className="w-full btn btn-outline btn-secondary mt-2">
                                Make Admin
                            </button>
                        </form>
                    </div>
                </div>
            </div>{" "}
        </div>
    );
};

export default MakeAdmin;
