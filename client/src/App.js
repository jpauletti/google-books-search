import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Header />
        </div>
      </>
    );
  }
}

export default App;
