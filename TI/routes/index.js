var express = require('express');
var router = express.Router();
const mainController = require("../controllers/mainControllers")

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/product', mainController.product);
router.get('/profile', mainController.profile);
router.get('/productAdd', mainController.productAdd);
router.get('/searchResults', mainController.searchResults);

module.exports = router;
