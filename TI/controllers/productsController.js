const db = require("../database/models");
const bcrypt = require('bcryptjs');

const productsController = {
    product: function(req, res) {
        const id = req.params.id;
        
        db.Producto.findByPk(id, {
            include: [
                { association: "users" },
                { association: "comentarios",
                    include: [{association:"users"}]
                }
            ]
        })
      .then(function(producto) { 
        if (producto) {
            res.render('product.ejs', {
                producto: producto
              });
        }
        })
      .catch(function(error){
          return res.send(error)
      })
    },

    productAddNew: function(req, res) {

   
  
      db.Producto.create({
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          usuarioId: req.body.usuarioId,
          nombreArchivoImg: req.body.imagen
      })
      .then(function() {
        return res.redirect(`/users/${usuarioId}`);
       })
      .catch(function(error){
        return res.send(error)
      });
  },

   productAdd: function(req, res) {
     res.render('product-add.ejs'); 
 },
 
    
};

module.exports = productsController;