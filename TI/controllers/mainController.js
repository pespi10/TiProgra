let db = require("../database/models");
let bcrypt = require ('bcryptjs');

const mainController = {
  index:function(req, res) {
    res.render('index',{productos:productos, usuario:usuario});
  },
  searchResults: function(req, res) {
    const busqueda = req.query.search;
    
    if (!busqueda) {
      return res.render('search-results', { 
        productos: [], 
        mensaje: "Por favor ingresa un término de búsqueda",
        busqueda: ""
      });
    }
    db.Producto.findAll({
      where: {
        nombre: {
          [db.Sequelize.Op.like]: `%${busqueda}%`
        }
      },
      include: [{ 
        association: "usuario" 
      }]
    })
    .then(function(productos) {
      if (productos.length === 0) {
        res.render('search-results', { 
          productos: [], 
          mensaje: "No hay resultados para su criterio de búsqueda",
          busqueda:busqueda
        });
      } else {
        res.render('search-results', { 
          productos: productos, 
          mensaje: null,
          busqueda: busqueda
        });
      }
    })
    .catch(function(error){
      return res.send(error)
  })




  }
}

module.exports = mainController