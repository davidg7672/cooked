import React from "react";
import ReactDOM from "react-dom/client";
import CartProvider from "./hooks/useCart";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./axiosConfig";

import { AuthProvider } from "./hooks/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./interceptors/authenticationInterceptors";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <CartProvider>
                    <App />
                    <ToastContainer
                        position="bottom-left"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        rtl={false}
                        pauseOnHover
                        theme="light"
                        closeOnClick
                    />
                </CartProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
