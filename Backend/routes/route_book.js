const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/controller_book')
const auth = require('../middleware/middleware_auth')
const upload = require('../middleware/middleware_multer_config')

router.get('/bestrating', bookCtrl.getBestRating);
router.get('/', bookCtrl.getAllBooks);
router.post('/', auth, upload, upload.resizeImage, bookCtrl.createBook);
router.get('/:id', bookCtrl.getOneBook);
router.put('/:id', auth, upload, upload.resizeImage, bookCtrl.updateBook);
router.delete('/:id', bookCtrl.removeOneBook, auth);
router.post('/:id/rating', auth, bookCtrl.postRating);

module.exports = router;