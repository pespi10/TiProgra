const usuario = require ("../db/usuario")
const productos = require ("../db/productos")

const usersController = {
    login: function(req, res) {
        res.render('login',{usuario:usuario, productos:productos});
    },
    register: function(req, res) {
        res.render('register',{usuario:usuario, productos:productos});
    },
    profile: function(req, res) {
        res.render('profile',{usuario:usuario,productos:productos});
    }
};

module.exports = usersController