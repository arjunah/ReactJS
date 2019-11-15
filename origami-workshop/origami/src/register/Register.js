import React from "react";
import "./Register.css"

function Register(props) {
    return (
        <div className="Register">
            <h1>Register</h1>
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
                    <label htmlFor="repassword">Repeat Password</label>
                    <input id="repassword" type="password" />
                </div>
                <div className="form-control">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;