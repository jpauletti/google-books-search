// const axios = require("axios");
const router = require("express").Router();
const db = require("../models");
const booksController = require("../controllers/booksController");

router.route("/api/books").get(booksController.getAll);

// router.route("/api/books", (req, res) => {
//     // save a new book to the database
//     db.Book.save(req.body).then(function(dbData) {
//         console.log("saving a new book....hopefully");
//         console.log(req.body);
//         console.log(dbData);
//     }).catch(err => { if (err) console.log(err) });
// })

router.route("/api/books").post(booksController.save);

router.route("/api/books/:id", (req, res) => {
    // delete a book from the database by Mongo _id
    db.Book.findOneAndDelete({ _id: req.params.id })
    .then(function (dbData) {
        console.log(dbData)
        res.json(dbData);
    }).catch(err => { if (err) console.log(err) });
})

router.route("*", (req, res) => {
    // load your single HTML page in 'client/build/index.html'
})

module.exports = router;

// // Matches with "/api/books"
// router.route("/")
//     .get(booksController.findAll)
//     .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//     .route("/:id")
//     .get(booksController.findById)
//     .put(booksController.update)
//     .delete(booksController.remove);

// module.exports = router;
