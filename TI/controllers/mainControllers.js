const infou = require("../db/usuario");

const mainController={

  index:function(req, res) {
    res.render('index',{productos:infou.productos, usuario:infou.usuario});
  },
  login: function(req, res) {
    res.render('login',{usuario:infou.usuario, productos:infou.productos});
  },
  register: function(req, res) {
    res.render('register',{usuario:infou.usuario, productos:infou.productos});
  },
  product: function(req, res) {
    res.render('product',{productos:infou.productos, usuario:infou.usuario});
  },
  profile: function(req, res) {
    res.render('profile',{usuario:infou.usuario,productos:infou.productos}
    );
  },
  productAdd: function(req, res) {
    res.render('product-add',{productos:infou.productos, usuario:infou.usuario});
  },
  searchResults: function(req, res) {
    res.render('search-results',{productos:infou.productos, usuario:infou.usuario});
  },
}

module.exports = mainController