import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import "./App.css";
import Routes from "./Routes";
import Navbar from "./components/Navigation/Navbar/Navbar";

class App extends Component {

    render() {
        const navbar = <Navbar/>;
        return (
            <div>
                {navbar}
                <Routes />
            </div>
        );
    }
}

export default withRouter(App);
