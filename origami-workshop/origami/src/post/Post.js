import React, { Fragment } from "react";
import Author from "../author/Author";
import "./Post.css";
import Logo from "../resources/logo.svg"

function Post(props) {
    return (
        <Fragment>
            <div className="Post">
                <img src={Logo} alt="Post" />
                <p className="description">
                    Lorem, ipsum.........
                </p>
                <Author />
            </div>
            <div className="Post">
                <img src={Logo} alt="Post" />
                <p className="description">
                    Lorem, ipsum.........
                </p>
                <Author />
            </div>
            <div className="Post">
                <img src={Logo} alt="Post" />
                <p className="description">
                    Lorem, ipsum.........
                </p>
                <Author />
            </div>
        </Fragment>
    )
}

export default Post;