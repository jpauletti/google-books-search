import React, { Component } from "react";
import "./style.css";

class Saved extends Component {
    componentDidMount = () => {
        console.log(this.props);
    }

    render() {
        return (
            <div className="row mt-4">
                <div className="col-md-12">
                    {/* <h3 className="display-5">{this.props.title}</h3> */}
                    <div class="card">
                        <h5 class="card-header">Saved</h5>
                        <div class="card-body">
                            <div className="result-card">
                                <div className="row">
                                    <div className="col-md-10 col-sm-9">
                                        <h5 class="card-title">Book Title</h5>
                                        <p class="card-text">Written by: Author Name</p>
                                    </div>
                                    <div className="col-md-2 col-sm-3 text-right">
                                        <a href="#" class="btn btn-sm btn-primary firstBtn">View</a>
                                        <a href="#" class="btn btn-sm btn-primary">Delete</a>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-3">
                                        <img className="img-fluid" src="./harry-potter.jpg" width="200px" />
                                    </div>

                                    <div className="col-md-9">
                                        lorem ipsum summary text goes here
                                    </div>
                                </div>
                                {/* <h5 class="card-title">Special title treatment</h5> */}
                                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                <hr />
                            </div>

                            <div className="result-card">
                                <div className="row">
                                    <div className="col-md-10 col-sm-9">
                                        <h5 class="card-title">Book Title</h5>
                                        <p class="card-text">Written by: Author Name</p>
                                    </div>
                                    <div className="col-md-2 col-sm-3 text-right">
                                        <a href="#" class="btn btn-sm btn-primary firstBtn">View</a>
                                        <a href="#" class="btn btn-sm btn-primary">Delete</a>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-3">
                                        <img className="img-fluid" src="./harry-potter.jpg" width="200px" />
                                    </div>

                                    <div className="col-md-9">
                                        lorem ipsum summary text goes here
                                    </div>
                                </div>
                                {/* <h5 class="card-title">Special title treatment</h5> */}
                                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                <hr />
                            </div>

                            {/* <div className="row result-card">
                                <div className="col-md-12">
                                    <h5>Book Title</h5>
                                    <p>Written by: Author Name</p>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img className="img-fluid" src="./harry-potter.jpg" width="200px" />
                                        </div>

                                        <div className="col-md-9">
                                            lorem ipsum summary text goes here
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="row result-card">
                        <div className="col-md-12">
                            <h5>Title</h5>
                            <p>Written by: Author Name</p>
                            <div className="row">
                                <div className="col-md-3">
                                    <img className="img-fluid" src="./harry-potter.jpg" width="200px" />
                                </div>

                                <div className="col-md-9">
                                    lorem ipsum summary text goes here
                                </div>
                            </div>

                        </div>
                    </div> */}
                </div>

            </div>
        );
    }
}

export default Saved;
