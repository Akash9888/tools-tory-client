import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/UserAuth/SignIn";
import SignUp from "./Pages/UserAuth/SignUp";
import ResetPass from "./Pages/UserAuth/ResetPass";
import FourZeroFour from "./Components/FourZeroFour";
import DashBoard from "./Pages/DashBoard/DashBoard";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/reset-pass" element={<ResetPass />} />
                    <Route path="/dashboard" element={<DashBoard />} />

                    <Route path="*" element={<FourZeroFour />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
