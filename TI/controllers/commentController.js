const db = require("../database/models");

const commentController = {
    crearComentario: function(req, res) {
        if (!req.session.user) {
            return res.redirect('/users/login');
        }

        db.Comment.create({
            texto: req.body.texto,
            usuarioId: req.session.user.id,
            productoId: req.params.id
        })
        .then(function() {
            return res.redirect(`/product/${req.params.id}`);
        })
        .catch(function(error) {
            return res.send(error);
        });
    }
};

module.exports = commentController; 