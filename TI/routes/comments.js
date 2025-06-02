const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/product/:id/comment', commentController.crearComentario);

module.exports = router;