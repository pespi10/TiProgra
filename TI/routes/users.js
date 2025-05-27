var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")


router.get('/register', usersController.show);
router.post('/newuser', usersController.create);

router.get('/login', usersController.login);
router.post('/processLogin', usersController.processLogin); 
router.post('/logout' , usersController.logout);

router.get('/perfil', usersController.perfil);

module.exports = router;
