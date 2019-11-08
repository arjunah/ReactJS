import React from "react";
import "./App.css";
import Navigation from "../navigation/Navigation";
import Aside from "../aside/Aside";
import Main from "../main/Main";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className="App"> 
        <Navigation />
        <div className="Container">
            <Aside />
            <Main />
        </div>
        <Footer />
    </div>
  );
}

export default App;
