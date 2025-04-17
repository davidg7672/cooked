import React from "react";
import tamalesImage from "../../images/tamales-background.webp";

function Chef(props) {
    return (
        <>
            <div className="chef-container">
                <img src={tamalesImage} alt="tamales" />
                <h2>Chef: {props.chef}</h2>
            </div>
        </>
    );
}

export default Chef;
