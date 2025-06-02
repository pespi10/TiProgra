const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/add', productsController.productAdd);
router.post('/add', productsController.productAddNew);
router.get('/:id', productsController.product);

module.exports = router;