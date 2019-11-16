import React from "react";
import Logo from "../resources/404.png";
import "./NotFound.css";

function NotFound () {
    return (
        <div className="FourOFour">
            <h1>Something went wrong...</h1>
            <img src={Logo} alt="404"/>
        </div>
    )
}

export default NotFound;