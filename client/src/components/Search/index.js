import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class Search extends Component {

    state = {
        search: ""
    }

    componentDidMount = () => {
        console.log(this.props);
        API.getBooks().then(booksRes => {
            console.log(booksRes);
        })
    }

    inputChange = event => {
        let { value } = event.target;
        this.setState({
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
                    <h3>Book Search</h3>
                    <form class="form-inline">
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="search" class="sr-only">Search for Books</label>
                            <input type="text" class="form-control" id="search" placeholder="Enter Book Title" value={this.state.search} onChange={this.inputChange} />
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Search</button>
                    </form>

                </div>

            </div>
        );
    }
}

export default Search;
