import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";
import SignupPage from "../pages/SignUpPage";
import LoginPge from "../pages/LoginPage";


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPge />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/home" element={<HomePage/>} />
            </Routes>
        </div>
    );
};

export default AllRoutes;