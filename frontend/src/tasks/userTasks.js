import axios from "axios";

export const getUser = () =>
    localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null;

export const login = async (email, password) => {
    const { data } = await axios.post("api/users/login", { email, password });
    localStorage.setItem("user", JSON.stringify(data));
    return data;
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const register = async (registrationData) => {
    const { data } = await axios.get("api/users/register", registrationData);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
};

export const updateProfile = async (userData) => {
    const { data } = await axios.put("/api/users/updateProfile", userData);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
};
