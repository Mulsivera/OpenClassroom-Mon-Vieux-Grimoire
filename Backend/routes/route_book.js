const express = require('express');

const router = express.Router();

const bookCtrl = require('../controllers/controller_book')

const auth = require('../middleware/middleware_auth')

const upload = require('../middleware/middleware_multer_config')

router.get('/', bookCtrl.getAllBooks);
router.post('/', auth, upload, upload.resizeImage, bookCtrl.createBook)

module.exports = router;