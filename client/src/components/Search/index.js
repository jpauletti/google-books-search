import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class Search extends Component {

    state = {
        search: ""
    }

    componentDidMount = () => {

    }

    inputChange = event => {
        let { value } = event.target;
        this.setState({
            search: value
        })
    }

    searchSubmit = event => {
        event.preventDefault();

        API.getBooks(this.state.search).then(booksRes => {
            const db = booksRes.data.items;
            console.log(booksRes.data.items);
            console.log(booksRes);
            const results = db.map(book => {
                const path = book.volumeInfo;
                const title = path.title;
                const authors = path.authors;
                const previewLink = path.previewLink;
                const description = path.description;
                const image = path.imageLinks.thumbnail || path.imageLinks.smallThumbnail;
                return {
                    title: title,
                    authors: authors,
                    description: description,
                    image: image,
                    link: previewLink
                }
            })

            this.props.updateResults(results);
        })

    }

    render() {
        return (
            <div className="row mt-4">
                <div className="col-md-12">
                    <h3>Book Search</h3>
                    <form className="form-inline">
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="search" className="sr-only">Search for Books</label>
                            <input type="text" className="form-control" id="search" placeholder="Enter Book Title" value={this.state.search} onChange={this.inputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.searchSubmit}>Search</button>
                    </form>

                </div>

            </div>
        );
    }
}

export default Search;
