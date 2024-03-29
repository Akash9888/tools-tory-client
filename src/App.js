import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/UserAuth/SignIn";
import SignUp from "./Pages/UserAuth/SignUp";
import ResetPass from "./Pages/UserAuth/ResetPass";
import FourZeroFour from "./Components/FourZeroFour";
import DashBoard from "./Pages/DashBoard/DashBoard";
import RequiredAuth from "./Pages/UserAuth/RequiredAuth";
import MyProfile from "./Pages/DashBoard/MyProfile";
import AddProduct from "./Pages/DashBoard/Admin/AddProduct";
import MakeAdmin from "./Pages/DashBoard/Admin/MakeAdmin";
import ManageAllOrders from "./Pages/DashBoard/Admin/ManageAllOrders";
import ManageProducts from "./Pages/DashBoard/Admin/ManageProducts";
import AddReview from "./Pages/DashBoard/User/AddReview";
import MyOrders from "./Pages/DashBoard/User/MyOrders";
import MyPortfolio from "./Pages/DashBoard/Portfolio/MyPortfolio";
import Purchase from "./Pages/Purchase/Purchase";
import { QueryClient, QueryClientProvider } from "react-query";
import Payment from "../src/Pages/Payment/Payment";
import CheckOut from "./Pages/Payment/CheckOut";
import RequiredAdmin from "./Pages/UserAuth/RequiredAdmin";
import Blog from "./Pages/Blog/Blog";

const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <Navigation />
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="sign-in" element={<SignIn />} />
                        <Route path="sign-up" element={<SignUp />} />
                        <Route path="reset-pass" element={<ResetPass />} />
                        <Route path="my-portfolio" element={<MyPortfolio />} />
                        <Route path="blog" element={<Blog />} />
                        <Route
                            path="purchase/:_id"
                            element={
                                <RequiredAuth>
                                    <Purchase />
                                </RequiredAuth>
                            }
                        />
                        <Route
                            path="checkout/:_id"
                            element={
                                <RequiredAuth>
                                    <CheckOut />
                                </RequiredAuth>
                            }
                        />
                        <Route
                            path="payment/:_id"
                            element={
                                <RequiredAuth>
                                    <Payment />
                                </RequiredAuth>
                            }
                        />

                        <Route
                            path="dashboard"
                            element={
                                <RequiredAuth>
                                    <DashBoard />
                                </RequiredAuth>
                            }>
                            {/* /payment/6290e5e4f88762516cb50276/dashboard/my-orders */}

                            <Route index element={<MyProfile />} />
                            <Route path="my-orders" element={<MyOrders />} />
                            <Route path="add-review" element={<AddReview />} />
                            <Route
                                path="add-product"
                                element={<AddProduct />}
                            />
                            <Route
                                path="manage-orders"
                                element={<ManageAllOrders />}
                            />
                            <Route
                                path="make-admin"
                                element={
                                    <RequiredAdmin>
                                        <MakeAdmin />
                                    </RequiredAdmin>
                                }
                            />
                            <Route
                                path="manage-products"
                                element={<ManageProducts />}
                            />
                            <Route />
                        </Route>

                        <Route path="*" element={<FourZeroFour />} />
                    </Route>
                </Routes>
                <Footer />
            </QueryClientProvider>
        </div>
    );
}

export default App;
