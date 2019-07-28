import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class Results extends Component {

    saveBook = event => {
        event.preventDefault();
        const index = event.target.parentNode.parentNode.parentNode.parentNode.getAttribute("data-i");
        // console.log(index);

        const newBook = this.props.searchResults[index];
        // console.log(newBook);

        API.saveBook(newBook).then(dbData => {
            // console.log("saved");
            window.location.replace("/saved");
        })
    }

    render() {
        return (
            <div className="row mt-4">
                <div className="col-md-12">
                    <div className="card">
                        <h5 className="card-header">Results</h5>
                        <div className="card-body">

                            {this.props.searchResults ?
                                this.props.searchResults.map((book, i) => {
                                    return (
                                        <div className="card mb-3" data-i={i}>
                                            <div className="row no-gutters">
                                                <div className="col-md-3">
                                                    <img src={book.image} className="card-img" alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{book.title}</h5>
                                                        {book.authors ? <p className="card-text text-secondary">Written by: {book.authors.map((author, i) => {
                                                            if (i === book.authors.length - 1) {
                                                                return author;
                                                            }
                                                            return author + ", ";
                                                        })}</p> : ""}
                                                        <p className="card-text">{book.description}</p>
                                                        <a href={book.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary firstBtn">View</a>
                                                        <a href="#" className="btn btn-sm btn-warning save-book" onClick={this.saveBook}>Save</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                ) : <p>No Results Found.</p>}

                            {/* {this.props.searchResults ? 
                                this.props.searchResults.map((book, i) => {
                                    return (
                                        <div className="result-card" data-i={i}>
                                            <div className="row">
                                                <div className="col-md-10 col-sm-9">
                                                    <h5 className="card-title">{book.title}</h5>
                                                    {book.authors ? <p className="card-text">Written by: {book.authors.map((author, i) =>{
                                                        if (i === book.authors.length - 1) {
                                                            return author;
                                                        }
                                                        return author + ", ";
                                                    })}</p> : "" }
                                                </div>
                                                <div className="col-md-2 col-sm-3 text-right">
                                                    <a href={book.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary firstBtn">View</a>
                                                    <a href="#" className="btn btn-sm btn-warning save-book" onClick={this.saveBook}>Save</a>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-3 book-image" style={{ backgroundImage: `url(${book.image})` }}>
                                                {/* </div>

                                                <div className="col-md-9">
                                                    {book.description}
                                                </div>
                                            </div>
                                            { (i !== this.props.searchResults.length -1) ? <hr /> : "" }
                                        </div>
                                    );
                                }
                            ) : <p>No Results Found.</p> } */}

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Results;
