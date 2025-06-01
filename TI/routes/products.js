const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/product', productsController.product);
router.get('/add', productsController.productAdd);

router.get('/search', productsController.search);


module.exports = router;