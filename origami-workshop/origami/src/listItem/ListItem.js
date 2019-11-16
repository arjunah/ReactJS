import React, { Fragment } from "react";
import "./ListItem.css";
import { Link } from "react-router-dom";

class ListItem extends React.Component {
    render() {
        return (
            <Fragment>
                <li className="listItem"><Link to="/">Home</Link></li>
                <li className="listItem"><Link to="/post">Post</Link></li>
                <li className="listItem"><Link to="/register">Register</Link></li>
                <li className="listItem"><Link to="/login">Login</Link></li>
                <li className="listItem"><Link to="/profile">Profile</Link></li>
            </Fragment>
        )
    }
}

export default ListItem;
