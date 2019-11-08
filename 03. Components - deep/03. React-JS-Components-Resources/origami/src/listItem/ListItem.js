import React from "react";
import "./ListItem.css";
import Logo from "../resources/white-origami-bird.png";

function ListItem (props) {
    const nums = [1,2,3,4,5,6,7,8,9,10,11];
    const items = nums.map(num => {
        return <li key={num} className="listItem"><a href="#">Going to {num}</a></li>
    });
    return (
        <ul>
            <img src={Logo}></img>
            {items}
        </ul>
    )
}

export default ListItem;
