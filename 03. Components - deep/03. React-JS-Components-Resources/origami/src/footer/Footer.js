import React from "react";
import ListItem from "../listItem/ListItem";
import "./Footer.css";
import Logo from "../resources/blue-origami-bird-flipped.png";

function Footer (props) {
    return (
        <footer className="Footer"> 
            <ul>          
                <ListItem />
                <img src={Logo} alt="Origami bird"/>
            </ul>
        </footer>
    )
}

export default Footer;