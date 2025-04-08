import axios from "axios";

// loading functionality
// Registering Axios Interceptors that control loading.
// Triggers to show loading when request is active. If it's not, it will hide loading accordingly.
function LoadingInterceptors({ showLoading, hideLoading }) {
    axios.interceptors.request.use(
        (req) => {
            if (!(req.data instanceof FormData)) showLoading();
            return req;
        },
        (error) => {
            hideLoading();
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        (res) => {
            hideLoading();
            return res;
        },
        (error) => {
            hideLoading();
            return Promise.reject(error);
        }
    );
}

export default LoadingInterceptors;
