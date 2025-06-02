const users = require ("../db/usuario")
const productos = require ("../db/productos")

const productsController = {
    product: function(req, res) {
        res.render('product',{productos:productos, users:users});
      },
    productAdd: function(req, res) {
        res.render('product',{productos:productos, users:users});
      },
    
};

module.exports = productsController