var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersControllers")

router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/profile', mainController.profile);

module.exports = router;
