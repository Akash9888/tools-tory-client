import React from "react";
import { Link } from "react-router-dom";
import auth from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Loader from "../Components/Loader";
import useFetchUser from "../CustomHooks/useFetchUser";
import { useAlert } from "react-alert";
const Navigation = () => {
    const [user, loading, error] = useAuthState(auth);
    const {
        isLoading,
        error: fetchError,
        data,
        isFetching,
    } = useFetchUser(
        `https://aqueous-anchorage-06068.herokuapp.com/api/user/fetch-user/${user?.email}`
    );

    const logout = () => {
        signOut(auth);
        alert.info("User Logout");
        localStorage.removeItem("accessToken");
    };
    const alert = useAlert();
    if (isLoading || loading) {
        return <Loader />;
    }
    if (error) {
        alert.error(error.message);
    }
    if (fetchError) {
        alert.error(fetchError.message);
    }

    return (
        <div class="navbar ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        {user && (
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        )}
                        <li>
                            <Link to="/my-portfolio">My Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Tools Tory</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    {user && (
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    )}
                    <li>
                        <Link to="/my-portfolio">My Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                {user ? (
                    <>
                        {!user?.displayName ? (
                            <p className="text-amber-700 font-semibold">
                                {data?.data[0]?.name}
                            </p>
                        ) : (
                            <p className="text-amber-700 font-semibold">
                                {user.displayName}
                            </p>
                        )}

                        <button class="btn btn-link" onClick={logout}>
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <button class="btn btn-link">
                            <Link to="/sign-in">Sign In</Link>
                        </button>
                        <button class="btn btn-link">
                            <Link to="/sign-up">Sign Up</Link>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navigation;
