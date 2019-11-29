import React from "react";
import "./Register.css";
import dbService from "../services/database";
import requestURLs from "../services/config";
import { Redirect } from "react-router-dom"

class Register extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            username: "",
            password: "",
            repassword: "",
            redirect: false
        }
    }

    changeHandler = (event) => {
        this.setState ({ [event.target.id]: event.target.value });
    }

    submitHandler = (event) => {
        event.preventDefault();
        const data = this.state;
        console.log(data);
        dbService.post(requestURLs.userRegisterPOST, data)
            .then(user => console.log(user))
            .catch(error => console.log(error))
        this.setState({ redirect: true })
    }
    render() {
        const { username, password, repassword, redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" /> 
        }  
        return (
            <div className="Register">
                <h1>Register</h1>
                <form onSubmit={ this.submitHandler }>
                    <div className="form-control">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="username" value={ username } onChange={ this.changeHandler } />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" value={ password } onChange={ this.changeHandler } />
                    </div>
                    <div className="form-control">
                        <label htmlFor="repassword">Repeat Password</label>
                        <input id="repassword" type="password" value={ repassword } onChange={ this.changeHandler } />
                    </div>
                    <div className="form-control">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;