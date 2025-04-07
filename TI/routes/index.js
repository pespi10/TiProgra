var express = require('express');
var router = express.Router();
const mainController = require("../controllers/mainControllers")

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/product', mainController.product);
router.get('/profile', mainController.profile);
router.get('/product-add', mainController.productAdd);
router.get('/search-results', mainController.searchResults);

module.exports = router;
