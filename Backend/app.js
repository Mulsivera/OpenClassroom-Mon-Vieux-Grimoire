const express = require('express')
const mongoose = require('mongoose');

const path= require('path');

const bookRoutes = require('./routes/route_book')
const userRoutes = require('./routes/route_user')

const app = express();

mongoose.connect('mongodb+srv://monvieuxgrimoireadmin:monvieuxgrimoireadmin@monvieuxgrimoire.enpi5.mongodb.net/?retryWrites=true&w=majority&appName=MonVieuxGrimoire',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', userRoutes)
app.use('/api/books', bookRoutes)

module.exports = app;