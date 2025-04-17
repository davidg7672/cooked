import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Food from "./pages/Food/Food";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import AuthRoute from "./components/authRoute/AuthRoute";

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/food/:id" element={<Food />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/profile"
                    element={
                        <AuthRoute>
                            <Profile />
                        </AuthRoute>
                    }
                />
            </Routes>
        </>
    );
}

export default AppRoutes;
