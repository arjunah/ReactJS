import React from "react";
import "./Navigation.css";
import ListItem from "../listItem/ListItem";
import Logo from "../resources/white-origami-bird.png";

function Navigation () {
    return (
        <nav className="Navigation">
            <ul>
                <img src={Logo} alt="Origami bird"/>    
                <ListItem />
            </ul>
        </nav>
    )
}

export default Navigation;