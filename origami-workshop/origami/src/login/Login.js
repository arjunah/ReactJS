import React from "react";
import "./Login.css"

function Login(props) {
    return (
        <div className="Login">
            <h1>Login</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" />
                </div>
                <div className="form-control">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;