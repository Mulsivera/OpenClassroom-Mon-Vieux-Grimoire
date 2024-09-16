const express = require('express');

const Book = require('../models/model_book')

const router = express.Router();

const bookCtrl = require('../controllers/controller_book')

router.get('/', stuffCtrl.getAllBook); 

module.exports = router;