const express = require('express');

const router = express.Router();

const bookCtrl = require('../controllers/controller_book')

const auth = require('../middleware/middleware_auth')

router.get('/', auth, bookCtrl.getAllBook); 

module.exports = router;