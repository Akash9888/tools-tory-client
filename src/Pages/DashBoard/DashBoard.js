import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseConfig";
import Loader from "../../Components/Loader";

import useAdmin from "../../CustomHooks/useAdmin";

const DashBoard = () => {
    const [user, loading, error] = useAuthState(auth);

    const {
        isLoading,
        error: fetchError,
        data,
    } = useAdmin(
        `https://aqueous-anchorage-06068.herokuapp.com/api/user/fetch-admin/${user?.email}`
    );

    if (loading || isLoading) {
        return <Loader />;
    }
    if (error) {
        console.log(error.message);
    }
    if (fetchError) {
        console.log(fetchError.message);
    }
    if (user) {
        console.log(data?.data[0].role);
    }
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/* <!-- Page content here --> */}
                <h1>this is dashboard</h1>
                <Outlet />
                <label
                    for="my-drawer-2"
                    class="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-40 bg-red-500 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to="/dashboard">My Profile</Link>
                    </li>
                    {data?.data[0]?.role == "admin" ? (
                        <>
                            <li>
                                <Link to="/dashboard/add-product">
                                    Add Product
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/manage-orders">
                                    Manage All Orders
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/make-admin">
                                    Make Admin
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/manage-products">
                                    Manage products
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/dashboard/my-orders">My Orders</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/add-review">
                                    Add Review
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;
