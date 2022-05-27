import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import auth from "../../firebaseConfig";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import GoogleLogin from "./GoogleLogin";
import Loader from "../../Components/Loader";
import axios from "axios";
import { useAlert } from "react-alert";
let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(15).required(),
});

const SignIn = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const getToken = async (email) => {
        const { data } = await axios.post(
            `https://aqueous-anchorage-06068.herokuapp.com/api/user/create-token`,
            { email }
        );

        localStorage.setItem("accessToken", data);

        // alert.success("User login successfully");
    };

    const navigate = useNavigate();
    const location = useLocation();
    const alert = useAlert();
    let from = location.state?.from?.pathname || "/";
    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };

    if (loading) {
        return <Loader />;
    }
    if (error) {
        alert.error(error.message);
    }
    if (user) {
        getToken(user.user.email);
        alert.success("Login Successfully");
        navigate(from, { replace: true });
        // navigate(from, { replace: true });
    }
    return (
        <div className="container w-full md:w-[30%] mx-auto my-5 p-2">
            <div className="w-full  p-8 space-y-3 rounded-xl bg-gray-900">
                <h1 className="text-2xl font-bold text-center text-white">
                    Login
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
                        />{" "}
                        <p className="text-white">
                            {" "}
                            {errors.password?.message}{" "}
                        </p>
                        <div className="flex justify-end text-xs text-white">
                            <Link to="/reset-pass" rel="noopener noreferrer">
                                Forgot Password?
                            </Link>
                        </div>
                    </div>
                    <p className="text-white">{error?.message}</p>

                    <button className="block w-full p-3 text-center rounded-sm text-white dark:text-gray-900 dark:bg-pink-400">
                        Sign in
                    </button>
                </form>
                <div className=" pt-4 ">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm text-white text-center">
                        Login with social account
                    </p>
                    <GoogleLogin />
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>

                <p className="text-xs text-center sm:px-6 text-white">
                    Don't have an account?
                    <Link
                        to="/sign-up"
                        rel="noopener noreferrer"
                        className=" dark:text-gray-100 ml-2">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
