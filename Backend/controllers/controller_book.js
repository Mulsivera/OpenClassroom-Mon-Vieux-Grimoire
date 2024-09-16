const Book = require('../models/model_book')

exports.getAllBook = (req, res, next) => {
  Book.find().then(
    (books) => {
      res.status(200).json(books);
    }
  ).catch((error) => {res.status(400).json({ error: error })});
}