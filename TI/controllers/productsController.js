const usuario = require ("../db/usuario")
const productos = require ("../db/productos")

const productsController = {
    product: function(req, res) {
        res.render('product',{productos:productos, usuario:usuario});
      },
    productAdd: function(req, res) {
        res.render('product',{productos:productos, usuario:usuario});
      },
    
};

module.exports = productsController