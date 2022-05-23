import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebaseConfig";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
let schema = yup.object().shape({
    email: yup.string().email().required(),
});

const ResetPass = () => {
    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        console.log(data);
        await sendPasswordResetEmail(data.email);
        navigate("/sign-in");
    };
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }
    return (
        <div className="container w-full md:w-[30%] mx-auto my-5 p-2">
            <div className="w-full  p-8 space-y-3 rounded-xl bg-gray-900">
                <h1 className="text-2xl font-bold text-center text-white">
                    Reset Password
                </h1>
                <form
                    className="space-y-6 ng-untouched ng-pristine ng-valid"
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            {...register("email")}
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                        />
                        <p className="text-white"> {errors.email?.message} </p>
                    </div>

                    <button className="block w-full p-3 text-center rounded-sm text-white dark:text-gray-900 dark:bg-pink-400">
                        Send Reset Link
                    </button>
                </form>

                <p className="text-xs text-center sm:px-6 text-white">
                    Remember Password?
                    <Link
                        to="/sign-in"
                        rel="noopener noreferrer"
                        className=" dark:text-gray-100 ml-2">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ResetPass;
