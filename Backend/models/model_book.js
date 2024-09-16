const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  userId: { type: String, required: true},
  title: { type: String, trquired: true},
  author: { type: String, required: true},
  year: { type: Number, required: true},
  imageUrl: { type: String, required: true},
  genre: { type: String, required: true},
  averageRating: { type: Number, required: true},
  
})

module.exports = mongoose.model('Book', bookSchema)