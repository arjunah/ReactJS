import React from "react";
import "./App.css";
import Navigation from "../navigation/Navigation";
import Aside from "../aside/Aside";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SharePost from "../share-post/SharePost";
import Register from "../register/Register";
import Login from "../login/Login";
import Profile from "../profile/Profile";
import NotFound from "../not-found/NotFound"

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <div className="Container">
                <Aside />
                <Switch>
                    <Route exact path="/"><Main /></Route>
                    <Route path="/post"><SharePost /></Route>
                    <Route path="/register"><Register /></Route>
                    <Route path="/login"><Login /></Route>
                    <Route path="/profile"><Profile /></Route>
                    <Route><NotFound /></Route>
                </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;