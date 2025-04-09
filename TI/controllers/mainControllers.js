const infou = require("../db/usuario");

const mainController={

  index:function(req, res) {
    res.render('index',{productos:infou.productos, usuario:infou.usuario});
  },
  login: function(req, res) {
    res.render('login');
  },
  register: function(req, res) {
    res.render('register');
  },
  product: function(req, res) {
    res.render('product');
  },
  profile: function(req, res) {
    res.render('profile',{usuario:infou.usuario,productos:infou.productos}
    );
  },
  productAdd: function(req, res) {
    res.render('product-add');
  },
  searchResults: function(req, res) {
    res.render('search-results',{productos:infou.productos});
  },
}

module.exports = mainController