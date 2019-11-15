import React from "react";
import PostContainer from "../post-container/PostContainer";
import "./Main.css";

function Main (props) {
    return (
        <main className="Main">
            <h1>Publications</h1>
            <PostContainer />
        </main>
    )
}

export default Main;