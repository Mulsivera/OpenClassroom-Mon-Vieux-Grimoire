const express = require('express')

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/', (req, res, next) => {
  const book = [
    {
      _id: 'foezhfouzeofu',
      title: 'Mon 1er livre',
      author: 'moi même',
      year: '2',
      genre: 'comédie',
      averageRating: '3'
    },
    {
      _id: 'foezhfouzeofu',
      title: 'Mon 1er livre',
      author: 'moi même',
      year: '2',
      genre: 'comédie',
      averageRating: '3'
    },
  ];
  res.status(200).json(book);
})

module.exports = app;