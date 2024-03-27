const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    book_name: {
        type: String,
        required: true,
    },
    book_price: {
        type: Number,
        required: true,
    },
    book_history: {
        type: String,
        required: true,
    },

});

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;