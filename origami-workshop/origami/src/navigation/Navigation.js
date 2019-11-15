import React from "react";
import "./Navigation.css";
import ListItem from "../listItem/ListItem";
import Logo from "../resources/white-origami-bird.png";

function Navigation() {
    return (
        <nav className="Navigation">
            <div className="img">
                <img src={Logo} alt="Origami bird" />
            </div>
            <div className="list">
                <ul>
                    <ListItem />
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;