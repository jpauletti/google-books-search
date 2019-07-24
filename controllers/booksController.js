const db = require("../models");

// Defining methods for the booksController
module.exports = {
    getAll: function (req, res) {
        db.Book.find({})
        .then(function (dbData) {
            res.json(dbData);
            // console.log(dbData);
        }).catch(err => { if (err) console.log(err) })
    },

    save: function (req, res) {
        db.Book.create(req.body)
        .then(function (dbData) {
            console.log(dbData);
            res.json(dbData);
        }).catch(err => { if (err) console.log(err) });
    },

    delete: function(req, res) {
        db.Book.findOneAndDelete({ _id: req.params.id })
        .then(function (dbData) {
            console.log("deleting")
            console.log(dbData)
            res.json(dbData);
        }).catch(err => { if (err) console.log(err) });
    }
};
