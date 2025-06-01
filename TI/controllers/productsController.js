const usuario = require ("../db/usuario")
const productos = require ("../db/productos")

const productsController = {
    product: function(req, res) {
        res.render('product',{productos:productos, usuario:usuario});
      },
    productAdd: function(req, res) {
        res.render('product',{productos:productos, usuario:usuario});
      },
      search: function (req, res) {
        const keyword = req.query.search.toLowerCase();
    
        // Filtramos los productos cuyo nombre incluye el texto buscado
        const resultados = productos.filter(prod =>
          prod.nombre.toLowerCase().includes(keyword)
        );
    
        // Enlazamos cada producto con el usuario que lo cargó
        const productosConUsuario = resultados.map(prod => {
          const usuario = usuarios.find(user => user.id === prod.usuario_id);
          return {
            ...prod,
            usuario
          };
        });
    
        // Si no hay resultados, mostramos el mensaje
        if (productosConUsuario.length === 0) {
          return res.render('search-results', {
            productos: [],
            keyword,
            mensaje: "No hay resultados para su criterio de búsqueda."
          });
        }
    
        res.render('search-results', {
          productos: productosConUsuario,
          keyword,
          mensaje: null
        });
      }
    
};

module.exports = productsController