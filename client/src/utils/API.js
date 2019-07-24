import axios from "axios";

export default {
    // Gets all books from search term
    getBooks: function (searchTerm) {
        // console.log("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "&maxResults=20");
        // return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm);
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "&maxResults=15");
    },
    // Gets all saved books as json
    getSavedBooks: function () {
        return axios.get("/api/books/");
    },
    // Deletes a book from the db with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};