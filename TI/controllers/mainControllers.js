const usuario = require ("../db/usuario")
const productos = require ("../db/productos")

const mainController = {
  index:function(req, res) {
    res.render('index',{productos:productos, usuario:usuario});
  },
  searchResults: function(req, res) {
    res.render('search-results',{productos:productos, usuario:usuario});
  },
}

module.exports = mainController