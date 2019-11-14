import React from "react";
import "./ListItem.css";

function ListItem (props) {
    const nums = [1,2,3,4,5,6,7,8,9];
    const items = nums.map(num => {
        return <li key={num} className="listItem"><a href="#">Going to {num}</a></li>
    });
    return items;
}

export default ListItem;
