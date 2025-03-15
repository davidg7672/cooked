import React from "react";
import { Link } from "react-router-dom";
import classes from "./Error.module.css";

const Error = ({
    message = "Not Found",
    link = "/",
    linkText = "Go To Home",
}) => {
    return (
        <>
            <div className={classes.container}>
                {message}
                <Link to={link}>{linkText}</Link>
            </div>
        </>
    );
};

export default Error;
