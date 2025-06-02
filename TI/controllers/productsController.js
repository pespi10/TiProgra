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

    productAdd: function(req, res) {
        if (!req.session.user) {
            return res.redirect('/users/login');
        }
        res.render('product-add.ejs'); 
    },

    productAddNew: function(req, res) {
        if (!req.session.user) {
            return res.redirect('/users/login');
        }

        db.Producto.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            usuarioId: req.session.user.id,
            nombreArchivoImg: req.body.imagen
        })
        .then(function(producto) {
            return res.redirect(`/product/${producto.id}`);
        })
        .catch(function(error){
            return res.send(error)
        });
    }
};

module.exports = productsController;