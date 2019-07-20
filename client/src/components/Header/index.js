import React, { Component } from "react";
import "./style.css";

class Header extends Component {

    render() {
        return (
            <div className="jumbotron text-center mt-4">
                <h1 className="display-4">Google Books Search</h1>
                <p className="lead">Search and save books of interest.</p>
            </div>
        );
    }
}

export default Header;
