const router = require("express").Router();
const { route } = require("express/lib/application");
const mongoose = require('mongoose');
const Book = require('../models/Books.model')


// get all books
router.get('/', (req, res, next) => {
  Book.find()
    .then(books => {
      res.status(200).json(books)
    })
    console.log('get all route')
});
// POST route - Add Book

router.post('/books', (req,res,next) => {
    const {ownerId, fiction, genre, language, tags, description} = req.body;

    Book.create({ ownerId, fiction, genre, language, tags, description})
    .then(book => {
      res.status(201).json(book)
    })
    .catch(err => res.json(err));
});

// get specifc book

router.get('/:id', (req, res, next) => {
  Project.findById(req.params.id)
    .then(book => {
      if (!book) {
        res.status(404).json(book)
      } else {
        res.status(200).json(book)
      }
    })
});


module.exports = router;

