import React, { useState } from "react";
import Loader from "../../../Components/Loader";
import usePost from "../../../CustomHooks/usePost";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebaseConfig";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
let schema = yup.object().shape({
    ratings: yup.number().positive().integer().min(1).max(5).required(),
    review: yup.string().required(),
});
const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const {
        savePostData,
        loading: postLoading,
        error: postError,
        data: postData,
    } = usePost(
        `https://aqueous-anchorage-06068.herokuapp.com/api/review/create-review`
    );
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const alert = useAlert();
    const reviewSubmit = (data, e) => {
        savePostData({
            review: data.review,
            ratings: data.ratings,
            name: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
        });
        e.target.reset();
    };

    if (postError) {
        alert.error(postError.message);
    }
    if (loading || postLoading) {
        return <Loader />;
    }
    if (postData) {
        alert.success("Review added successfully");
    }
    return (
        <div className="container w-full md:w-[50%] mx-auto my-5 p-2">
            <div className="flex flex-col max-w-xl p-8 card  bg-base-100 shadow-xl rounded-xl lg:p-12 text-gray-800">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">
                        Your opinion matters!
                    </h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">
                            How was your experience?
                        </span>
                    </div>
                    <div className="flex flex-col w-full">
                        <form onSubmit={handleSubmit(reviewSubmit)}>
                            <label className="block mb-3">
                                <span className="mb-1">Ratings</span>
                                <input
                                    type="number"
                                    name="ratings"
                                    {...register("ratings")}
                                    placeholder="Enter nuber of ratings"
                                    className="w-full px-4 py-3 rounded-md text-gray-800 bg-gray-200"
                                />
                                <p className="text-red-900">
                                    {errors?.ratings?.message}
                                </p>
                            </label>
                            <textarea
                                rows="3"
                                name="review"
                                {...register("review")}
                                placeholder="Review..."
                                className="w-full p-4 rounded-md resize-none text-gray-800 bg-gray-200"
                                spellcheck="false"></textarea>
                            <p className="text-red-900">
                                {errors?.review?.message}
                            </p>
                            <button
                                type="submit"
                                className="w-full btn btn-outline btn-secondary mt-1">
                                Leave review
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
