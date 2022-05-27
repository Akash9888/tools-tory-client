import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loader from "../../Components/Loader";
import auth from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import ProfileUpdateModal from "./User/ProfileUpdateModal";
import useFetchUser from "../../CustomHooks/useFetchUser";
import ProfileAddModal from "./User/ProfileAddModal";
const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const {
        isLoading,
        error: fetchError,
        data,
        isFetching,
    } = useFetchUser(
        `https://aqueous-anchorage-06068.herokuapp.com/api/user/fetch-user/${user?.email}`
    );
    if (isLoading || loading) {
        return <Loader />;
    }
    if (error) {
        console.log(error.message);
    }
    if (fetchError) {
        console.log(fetchError.message);
    }
    if (data) {
        console.log(data.data[0]);
    }

    return (
        <div className="container w-full md:max-w-[60%] p-2 mx-auto">
            <h1 className="text-center text-3xl">My Profile</h1>
            <div className=" p-8 sm:flex sm:space-x-6 bg-gray-50 text-gray-800">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img
                        src={
                            user?.photoURL
                                ? user.photoURL
                                : "https://api.lorem.space/image/face?hash=33791"
                        }
                        alt=""
                        className="object-cover object-center w-full h-full rounded bg-gray-500"
                    />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        {!user?.displayName ? (
                            <h2 className="text-2xl font-semibold">
                                {data?.data[0]?.name}
                            </h2>
                        ) : (
                            <h2 className="text-2xl font-semibold">
                                {user.displayName}
                            </h2>
                        )}
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                aria-label="Email address"
                                className="w-4 h-4">
                                <path
                                    fill="currentColor"
                                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                            </svg>
                            <span className="text-gray-600">
                                {data?.data[0]?.email}
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            <ProfileUpdateModal />
            <ProfileAddModal />
            <div className="flex justify-center space-x-3 mt-5 text-center ">
                <div className="text-center">
                    <label for="proile-update-modal" className="btn">
                        Update Profile
                    </label>
                </div>
                <div className="text-center">
                    <label for="profile-add-modal" className="btn">
                        Add Profile Info
                    </label>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
