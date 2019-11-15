import React from "react";
import Logo from "../resources/logo.svg";
import Post from "../post/Post";
import "./Profile.css";

function Profile (props) {
    return (
        <div className="Profile">
            <img src={Logo} alt="Profile"/>
            <div className="personal-info">
                <p>
                    <span>Email:</span>
                    some.email@mail.com
                </p>
                <p>
                    <span>Posts:</span>
                    1
                </p>
            </div>
            <div>
                <h2>Recent posts:</h2>
                <Post />
            </div>
        </div>
    )
}

export default Profile;