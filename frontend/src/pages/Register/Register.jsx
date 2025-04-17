import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import classes from "./Register.module.css";
import Input from "../../components/ui/input/Input";
import Title from "../../components/title/Title";
import Button from "../../components/ui/button/Button";
import { Link } from "react-router-dom";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
    const auth = useAuth();
    const { user } = auth;
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const returnUrl = params.get("returnUrl");
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i;

    useEffect(() => {
        if (!user) return;
        // send user home!
        returnUrl ? navigate(returnUrl) : navigate("/");
    }, [user]);

    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors },
    } = useForm();

    const submit = async (data) => {
        await auth.register(data);
    };

    return (
        <>
            <div className={classes.container}>
                <div className={classes.details}>
                    <Title title="Register" />
                    <form onSubmit={handleSubmit(submit)} noValidate>
                        {/* name */}
                        <Input
                            type="text"
                            label="Name"
                            error={errors.name}
                            {...register("name", {
                                required: true,
                                minLength: 5,
                            })}
                        />

                        {/* email */}
                        <Input
                            type="email"
                            label="Email"
                            error={errors.name}
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: regex,
                                    message: "Please Enter a Different email",
                                },
                            })}
                        />

                        {/* password */}
                        <Input
                            type="password"
                            label="Password"
                            error={errors.password}
                            {...register("password", {
                                required: true,
                                minLength: 5,
                            })}
                        />

                        {/* address */}
                        <Input
                            type="text"
                            label="Address"
                            error={errors.address}
                            {...register("address", {
                                required: true,
                                minLength: 10,
                            })}
                        />

                        <Button type="submit" text="Register" />
                        <div className={classes.login}>
                            Already a User?
                            <Link
                                to={`/login${
                                    returnUrl ? `returnUrl=` + returnUrl : ""
                                }`}
                            >
                                Login Here
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
