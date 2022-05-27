import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useUpdate from "../../../CustomHooks/useUpdate";
import auth from "../../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../../../Components/Loader";
import Swal from "sweetalert2";
let schema = yup.object().shape({
    address: yup.string().required(),
    education: yup.string().required(),
    phone: yup.string().required(),

    linkedin: yup.string().url().required(),
});

const ProfileAddModal = () => {
    const [user, loading, error] = useAuthState(auth);
    const { saveupdatedData, loading: upLoading, data } = useUpdate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const profileData = (data) => {
        console.log(data);
        saveupdatedData(
            `https://aqueous-anchorage-06068.herokuapp.com/api/user/update-user/${user?.email}`,
            data
        );
        Swal.fire("Profile Updated");
    };
    if (loading || upLoading) {
        return <Loader />;
    }
    if (error) {
        console.log(error.message);
    }
    return (
        <div>
            <input
                type="checkbox"
                id="profile-add-modal"
                class="modal-toggle"
            />
            <div class="modal">
                <div class="modal-box relative">
                    <label
                        for="profile-add-modal"
                        class="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <div>
                        <form
                            onSubmit={handleSubmit(profileData)}
                            novalidate=""
                            className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-300 ng-untouched ng-pristine ng-valid">
                            <h2 className="w-full text-3xl text-center font-bold leading-tight">
                                Add Profile Info
                            </h2>
                            <div>
                                <label for="name" className="block  ml-1">
                                    Education
                                </label>
                                <input
                                    name="education"
                                    type="text"
                                    placeholder="Enter Educational Details"
                                    {...register("education")}
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                                />
                                <p className="text-red-700">
                                    {errors.education?.message}
                                </p>
                            </div>
                            <div>
                                <label for="location" className="block  ml-1">
                                    Address
                                </label>
                                <input
                                    name="address"
                                    type="text"
                                    placeholder="Enter your address"
                                    {...register("address")}
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                                />{" "}
                                <p className="text-red-700">
                                    {errors.address?.message}
                                </p>
                            </div>
                            <div>
                                <label for="name" className="block  ml-1">
                                    Phone Number
                                </label>
                                <input
                                    name="phone"
                                    type="text"
                                    placeholder="Your phone number"
                                    {...register("phone")}
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                                />
                                <p className="text-red-700">
                                    {errors.phone?.message}
                                </p>
                            </div>
                            <div>
                                <label for="name" className="block  ml-1">
                                    Linkedin Profile
                                </label>
                                <input
                                    name="linkedin"
                                    type="string"
                                    placeholder="Enter linkdein profile"
                                    {...register("linkedin")}
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                                />{" "}
                                <p className="text-red-700">
                                    {errors.linkedin?.message}
                                </p>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full text-center border border-sky-500 rounded-full py-2 px-4 text-pink-600 font-semibold hover:bg-stone-200 ">
                                    Add Info
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAddModal;
