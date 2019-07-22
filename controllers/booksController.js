const db = require("../models");

// Defining methods for the booksController
module.exports = {
    save: function (req, res) {
        db.Book.create(req.body)
        .then(function (dbData) {
            console.log(dbData);
            res.json(dbData);
        }).catch(err => { if (err) console.log(err) });
    },

    getAll: function (req, res) {
        db.Book.find({})
        .then(function(dbData) {
            res.json(dbData);
            console.log(dbData);
        }).catch(err => { if(err) console.log(err) })
    }

};
