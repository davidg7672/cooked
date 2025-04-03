import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import { useLoading } from "./hooks/useLoading";
import { setLoadingInterceptor } from "./interceptors/loadingInterceptors";
import Loading from "./components/loading/Loading";

function App() {
    const { showLoading, hideLoading } = useLoading();

    useEffect(() => {
        setLoadingInterceptor({ showLoading, hideLoading });
    }, []);

    return (
        <>
            <Loading />
            <Navbar />
            <AppRoutes />
        </>
    );
}

export default App;
