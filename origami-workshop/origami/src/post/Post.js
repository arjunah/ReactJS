import React from "react";
import Author from "../author/Author";
import "./Post.css";
import Logo from "../resources/logo.svg"
import dbService from "../services/database";
import requestURLs from "../services/config";

class Post extends React.Component {
    state = {
        posts: null
    }

    componentDidMount () {
        dbService.get(requestURLs.origamiGET)
            .then(posts => {
                this.setState({ posts });
            });
    }

    render() {
        const { posts } = this.state;
        const output = posts ? posts.map(post => {
            return (
                <div key={post._id} className="Post">
                    <img src={Logo} alt="Post" />
                    <p className="description">
                        {post.description}                
                    </p>
                    <Author>{post.author.username}</Author>
                </div>
            )
        }) : null;

        return output;
    }
}

export default Post;