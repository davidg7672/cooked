import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import classes from "./Login.module.css";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Title from "../../components/title/Title";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";

const Login = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const { user, login } = useAuth();
    const [params] = useSearchParams();
    const returnUrl = params.get("returnUrl");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    useEffect(() => {
        if (!user) return;
        returnUrl ? navigate(returnUrl) : navigate("/");
    }, [user]);

    const submit = async ({ email, password }) => {
        await login(email, password);
    };

    return (
        <>
            <div className={classes.container}>
                <div className={classes.details}>
                    <Title title="Login" />
                    <form onSubmit={handleSubmit(submit)} noValidate>
                        <Input
                            type="email"
                            label="Email"
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: regex,
                                    message: "Not Valid",
                                },
                            })}
                            error={errors.email}
                        />
                        <Input
                            type="password"
                            label="Password"
                            {...register("password", {
                                required: true,
                            })}
                            error={errors.password}
                        />
                        <Button type="submit" text="Login" />

                        <div className={classes.register}>
                            <span>
                                New User?
                                <Link
                                    to={`/register${
                                        returnUrl
                                            ? `?returnUrl=` + returnUrl
                                            : ""
                                    }`}
                                >
                                    Register Here!
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
