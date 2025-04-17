import React from "react";
import classes from "./Input.module.css";
import InputContainer from "../InputContainer/InputContainer";

const Input = (
    { label, type, defaultValue, onChange, onBlur, name, error },
    ref
) => {
    const getError = () => {
        if (!error) return;
        if (error.message) return error.message;

        switch (error.type) {
            case "required":
                return "Field Required";
            case "minLength":
                return "Field Too Short";
            default:
                return "*";
        }
    };

    return (
        <>
            <InputContainer label={label}>
                <input
                    defaultValue={defaultValue}
                    className={classes.input}
                    type={type}
                    placeholder={label}
                    ref={ref}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {error && <div className={classes.error}>{getError()}</div>}
            </InputContainer>
        </>
    );
};

export default React.forwardRef(Input);
