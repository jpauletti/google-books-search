import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <div className="container mb-5">
            <Header />
            <Route exact path="/saved" component={Search} />
            <Router>
              <Route exact path="/" component={Results} />
              <Route exact path="/saved" component={Saved} />
              {/* <Saved title="Saved" /> */}
            </Router>
          </div>


          {/* <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch> */}
        </Router>
      </>
    );
  }
}

export default App;
