import React, { useState } from "react";
import Loader from "../../../Components/Loader";
import usePost from "../../../CustomHooks/usePost";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebaseConfig";
const AddReview = () => {
    const {
        savePostData,
        loading: postLoading,
        error: postError,
        data,
    } = usePost(`http://localhost:5000/api/create-review`);
    const [user, loading, error] = useAuthState(auth);
    const [star1, setStar1] = useState(false);
    const [star2, setStar2] = useState(false);
    const [star3, setStar3] = useState(false);
    const [star4, setStar4] = useState(false);
    const [star5, setStar5] = useState(false);
    const [totalStars, setTotalStars] = useState(0);
    // console.log(totalStars);

    const reviewSubmit = (e) => {
        e.preventDefault();

        savePostData({
            review: e.target.review.value,
            ratings: totalStars,
            name: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
        });
    };
    if (error) {
        console.log(error.message);
    }
    if (postError) {
        console.log(postError.message);
    }
    if (loading || postLoading) {
        return <Loader />;
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
                        <div className="flex space-x-3">
                            <button
                                type="button"
                                title="Rate 1 stars"
                                aria-label="Rate 1 stars">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className={`w-10 h-10  text-${
                                        star1 ? "yellow-500" : "gray-400"
                                    }`}
                                    onClick={() => {
                                        setStar1(!star1);
                                        if (!star1 === true) {
                                            setTotalStars(totalStars + 1);
                                            console.log(totalStars);
                                        }
                                        if (
                                            !star1 === false &&
                                            totalStars > 0
                                        ) {
                                            setTotalStars(totalStars - 1);
                                            console.log(totalStars);
                                        }
                                    }}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                title="Rate 1 stars"
                                aria-label="Rate 1 stars">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className={`w-10 h-10  text-${
                                        star2 ? "yellow-500" : "gray-400"
                                    }`}
                                    onClick={() => {
                                        setStar2(!star2);
                                        if (!star2 === true) {
                                            setTotalStars(totalStars + 1);
                                            console.log(totalStars);
                                        }
                                        if (
                                            !star2 === false &&
                                            totalStars > 0
                                        ) {
                                            setTotalStars(totalStars - 1);
                                            console.log(totalStars);
                                        }
                                    }}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                title="Rate 1 stars"
                                aria-label="Rate 1 stars">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className={`w-10 h-10  text-${
                                        star3 ? "yellow-500" : "gray-400"
                                    }`}
                                    onClick={() => {
                                        setStar3(!star3);
                                        if (!star3 === true) {
                                            setTotalStars(totalStars + 1);
                                            console.log(totalStars);
                                        }
                                        if (
                                            !star3 === false &&
                                            totalStars > 0
                                        ) {
                                            setTotalStars(totalStars - 1);
                                            console.log(totalStars);
                                        }
                                    }}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                title="Rate 1 stars"
                                aria-label="Rate 1 stars">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className={`w-10 h-10  text-${
                                        star4 ? "yellow-500" : "gray-400"
                                    }`}
                                    onClick={() => {
                                        setStar4(!star4);
                                        if (!star4 === true) {
                                            setTotalStars(totalStars + 1);
                                            console.log(totalStars);
                                        }
                                        if (
                                            !star4 === false &&
                                            totalStars > 0
                                        ) {
                                            setTotalStars(totalStars - 1);
                                            console.log(totalStars);
                                        }
                                    }}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                title="Rate 1 stars"
                                aria-label="Rate 1 stars">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className={`w-10 h-10  text-${
                                        star5 ? "yellow-500" : "gray-400"
                                    }`}
                                    onClick={() => {
                                        console.log("Star 5", star5);
                                        setStar5(!star5);
                                        console.log("Star 5", star5);
                                        if (!star5 === true) {
                                            setTotalStars(totalStars + 1);
                                            console.log(totalStars);
                                        }
                                        if (
                                            !star5 === false &&
                                            totalStars > 0
                                        ) {
                                            setTotalStars(totalStars - 1);
                                            console.log(totalStars);
                                        }
                                    }}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <form onSubmit={reviewSubmit}>
                            <textarea
                                rows="3"
                                name="review"
                                required={true}
                                placeholder="Message..."
                                className="w-full p-4 rounded-md resize-none text-gray-800 bg-gray-200"
                                spellcheck="false"></textarea>
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
