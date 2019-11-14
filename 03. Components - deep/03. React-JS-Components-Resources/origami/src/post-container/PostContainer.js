import React from "react";
import Post from "../post/Post";
import "./PostContainer.css";

function PostContainer (props) {
    return (
        <div className="Posts">
            <Post />
        </div>
    )
}

export default PostContainer;