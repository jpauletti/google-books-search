import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";
import NotFound from "./components/NotFound";

class App extends Component {

  state = {
    searchResults: ""
  }

  updateResults = itemsArr => {
    this.setState({
      searchResults: itemsArr
    });
  }

  SearchSection = (props) => {
    return (
      <Search
        updateResults={this.updateResults}
      />
    );
  }

  ResultsSection = (props) => {
    return (
      <Results
        searchResults={this.state.searchResults}
      />
    );
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <div className="container mb-5">
            <Header />
            <Route exact path="/" render={this.SearchSection} />
            <Router>
              <Switch>
                <Route exact path="/" render={this.ResultsSection} />
                <Route exact path="/saved" component={Saved} />
                <Route component={NotFound} />
              </Switch>
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
