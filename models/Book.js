var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SavedSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false,
        trim: true
    },
    link: {
        type: String,
        required: true
    }
})

// create model from schema
var Book = mongoose.model("Book", SavedSchema);

// export Story model
module.exports = Book;