const usuario = require ("../db/usuario")
const productos = require ("../db/productos")

const mainController={

  index:function(req, res) {
    res.render('index',{productos:productos, usuario:usuario});
  },
  login: function(req, res) {
    res.render('login',{usuario:usuario, productos:productos});
  },
  register: function(req, res) {
    res.render('register',{usuario:usuario, productos:productos});
  },
  product: function(req, res) {
    res.render('product',{productos:productos, usuario:usuario});
  },
  profile: function(req, res) {
    res.render('profile',{usuario:usuario,productos:productos}
    );
  },
  productAdd: function(req, res) {
    res.render('product-add',{productos:productos, usuario:usuario});
  },
  searchResults: function(req, res) {
    res.render('search-results',{productos:productos, usuario:usuario});
  },
}

module.exports = mainController