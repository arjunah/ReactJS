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
            <p>Copyright SoftUni 2019</p>
        </footer>
    )
}

export default Footer;