import React from "react";

function Author (props) {
    return (
        <div>
            <span>
                <small>Author:</small>
                {props.children}
            </span>
        </div>
    )
}

export default Author;