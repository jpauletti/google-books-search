// const axios = require("axios");
const router = require("express").Router();
const db = require("../models");

router.route("/api/books", (req, res) => {
    // all saved books as json
    db.Book.find({})
    .then(function(dbData) {
        console.log(dbData)
    }).catch(err => { if (err) console.log(err) });
})

router.route("/api/books", (req, res) => {
    // save a new book to the database
    db.Book.save({

    }).then(function(dbData) {
        console.log(dbData)
    }).catch(err => { if (err) console.log(err) });
})

router.route("/api/books/:id", (req, res) => {
    // delete a book from the database by Mongo _id
    db.Book.findOneAndDelete({ _id: req.params.id })
    .then(function (dbData) {
        console.log(dbData)
    }).catch(err => { if (err) console.log(err) });
})

router.route("*", (req, res) => {
    // load your single HTML page in 'client/build/index.html'
})

module.exports = router;