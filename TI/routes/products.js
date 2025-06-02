const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/:id', productsController.product);
router.get('/add', productsController.productAdd);



module.exports = router;