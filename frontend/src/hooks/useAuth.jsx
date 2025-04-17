import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as userTask from "../tasks/userTasks";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(userTask.getUser());

    const login = async (email, password) => {
        try {
            const user = await userTask.login(email, password);
            setUser(user);
            toast.success("Logged In");
        } catch (err) {
            toast.error(err.response.data);
        }
    };

    const logout = () => {
        toast.success("Logged Out");
        userTask.logout();
        setUser(null);
        navigate("/login");
    };

    const register = async (userData) => {
        try {
            const user = await userTask.register(userData);
            setUser(user);
            toast.success("Registration successful");
        } catch (err) {
            toast.error(err.response.data);
        }
    };

    const updateProfile = async (user) => {
        const updatedUser = await userTask.updateProfile(user);
        toast.success("Profile Updated");
        if (updatedUser) setUser(updatedUser);
    };

    return (
        <AuthContext.Provider
            value={{ user, login, logout, register, updateProfile }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
