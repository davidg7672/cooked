import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import Title from "../../components/title/Title";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import classes from "./Profile.module.css";

const Profile = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const { user, updateProfile } = useAuth();

    const submit = (user) => {
        updateProfile(user);
    };

    return (
        <>
            <div className={classes.container}>
                <div className={classes.details}>
                    <Title title="Update Profile" />
                    <form onSubmit={handleSubmit(submit)}>
                        {/* user name */}
                        <Input
                            defaultValue={user.name}
                            type="text"
                            label="Name"
                            {...register("name", {
                                required: true,
                                minLength: 5,
                            })}
                            errors={errors.message}
                        />

                        {/* address */}
                        <Input
                            defaultValue={user.address}
                            type="text"
                            label="Address"
                            {...register("address", {
                                required: true,
                                minLength: 10,
                            })}
                            error={errors.address}
                        />

                        <Button
                            type="submit"
                            text="Update"
                            backgroundColor="#fe4929"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Profile;
