import React, { Component } from "react";
import "./style.css";

class Search extends Component {

    state = {
        search: ""
    }

    componentDidMount = () => {
        console.log(this.props);
    }

    inputChange = event => {
        let { value } = event.target;
        this.ListeningStateChangedEvent({
            search: value
        })
    }

    searchSubmit = event => {
        event.preventDefault();
        
    }

    render() {
        return (
            <div className="row mt-4">
                <div className="col-md-12">
                    <input name="search" id="search" value={this.state.search} onChange={this.inputChange} />
                    <button onSubmit={this.searchSubmit}></button>

                </div>

            </div>
        );
    }
}

export default Search;
