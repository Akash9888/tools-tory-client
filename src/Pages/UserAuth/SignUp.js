import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import auth from "../../firebaseConfig";
import "react-toastify/dist/ReactToastify.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import { sendEmailVerification } from "firebase/auth";
let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password);
    };
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate("/sign-in");
    }
    return (
        <>
            <div className="container w-full md:w-[30%] mx-auto my-5 p-2">
                <div className="w-full  p-8 space-y-3 rounded-xl bg-gray-900">
                    <h1 className="text-2xl font-bold text-center text-white">
                        SignUp
                    </h1>
                    <form
                        className="space-y-6 ng-untouched ng-pristine ng-valid"
                        onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-1 text-sm">
                            <label for="username" className="block text-white">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                {...register("name")}
                                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                            />
                            <p className="text-white">{errors.name?.message}</p>
                        </div>

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
                            <p className="text-white">
                                {errors.email?.message}
                            </p>
                        </div>
                        <div className="space-y-1 text-sm">
                            <label for="password" className="block text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                {...register("password")}
                                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                            />
                            <p className="text-white">
                                {errors.password?.message}
                            </p>
                        </div>
                        <div className="space-y-1 text-sm">
                            <label for="password" className="block text-white">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name=" confirmPassword"
                                placeholder="Password"
                                {...register("confirmPassword")}
                                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                            />
                            <p className="text-white">
                                {errors.confirmPassword &&
                                    "password should match"}
                            </p>
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm text-white dark:text-gray-900 dark:bg-pink-400">
                            Sign Up
                        </button>
                        <p className="text-white">{error?.message}</p>
                    </form>

                    <p className="text-xs text-center sm:px-6 text-white">
                        Already have an Account?
                        <Link
                            to="/sign-in"
                            rel="noopener noreferrer"
                            className=" dark:text-gray-100 ml-2">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default SignUp;
