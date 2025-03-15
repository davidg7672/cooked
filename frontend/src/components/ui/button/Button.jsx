import React from "react";
import classes from "./Button.module.css";

const Button = ({
    type = "button",
    text = "Submit",
    onClick,
    color = "white",
    backgroundColor = "red",
    fontSize = "1.5rem",
    width = "12rem",
    height = "3.5rem",
}) => {
    return (
        <>
            <div className={classes.container}>
                <button
                    style={{
                        color,
                        backgroundColor,
                        fontSize,
                        width,
                        height,
                    }}
                    type={type}
                    onClick={onClick}
                >
                    {text}
                </button>
            </div>
        </>
    );
};

export default Button;
