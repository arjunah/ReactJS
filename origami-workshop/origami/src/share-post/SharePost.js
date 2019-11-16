import React from "react";
import "./SharePost.css";
import Post from "../post/Post";

function SharePost(props) {
    return (
        <div className="Input">
            <div>
                <h1>Share your thoughts...</h1>
                <textarea></textarea>
                <button>Post</button>
            </div>
            <div>
                <h2>Last 3 posts:</h2>
                <Post />
            </div>
        </div>
    )
}

export default SharePost;