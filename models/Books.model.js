const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    ownerId: Number,
    fiction: Boolean,
    genre: String,
    language: String,
    tags: [String],
    description: String,
  },
  
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

// check syntax for tags array 
