import React from "react";

function Title({ title, fontSize, margin }) {
    return <h1 style={{ fontSize, margin, color: "black" }}>{title}</h1>;
}

export default Title;
