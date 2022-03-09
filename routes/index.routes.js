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
    const { fiction, genre, language, tags, description} = req.body;
    const creator = req.payload._id

    Book.create({ fiction, genre, language, tags, description, creator})
    .then(book => {
      res.status(201).json(book)
    })
    .catch(err => res.json(err));
});

router.get('/my-books', (req, res, next) => {
  console.log('test',req.payload)
  Book.find({creator: req.payload._id})
    .then(book => {
      if (!book) {
        res.status(404).json(book)
      } else {
        res.status(200).json(book)
      }
    })
});

router.delete('/book/:id', (req, res, next) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'book deleted' })
    })
    .catch(err => next(err))
});



router.get('/:id', (req, res, next) => {
  Book.findById(req.params.id)
  .populate('creator')
    .then(book => {
      console.log(book)
      if (!book) {
        res.status(404).json(book)
      } else {
        res.status(200).json(book)
      }
      
    })
});









module.exports = router;

