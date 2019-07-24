// const axios = require("axios");
const router = require("express").Router();
const db = require("../models");
const booksController = require("../controllers/booksController");

router.route("/api/books").get(booksController.getAll);

router.route("/api/books").post(booksController.save);

router.route("/api/books/:id").delete(booksController.delete);

router.route("*", (req, res) => {
    // load your single HTML page in 'client/build/index.html'
    res.sendFile(path.join(__dirname, "./index.html"));
})

module.exports = router;
