const user = require ("../db/usuario")
const productos = require ("../db/productos")

const productsController = {
    product: function(req, res) {
        res.render('product',{productos:productos, user:user});
      },
    productAdd: function(req, res) {
        res.render('product',{productos:productos, user:user});
      },
    
};

module.exports = productsController