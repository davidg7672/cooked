import React from "react";
import { GiCook } from "react-icons/gi";
import "./Logo.modules.css";

function Logo() {
    return (
        <>
            <div className="container">
                <GiCook className="cook" />
                <h1 className="name">Cooked</h1>
            </div>
        </>
    );
}

export default Logo;
