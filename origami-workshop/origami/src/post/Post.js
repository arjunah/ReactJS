import React from "react";
import Author from "../author/Author";
import "./Post.css";
import Logo from "../resources/logo.svg"

function Post (props) {
    return (
        <div className="Post">
            <img src={Logo} alt="Post image"/>
            <p className="description">
                Lorem, ipsum.........
            </p>
            <Author />
        </div>
    )
}

export default Post;