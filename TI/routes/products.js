const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/product', mainController.product);
router.get('/productAdd', mainController.productAdd);

module.exports = router;