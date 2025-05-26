module.exports = function (sequelize, dataTypes){

    let alias = 'Producto';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        nombreArchivoImg: {
            type: dataTypes.STRING(50)
        },
        nombre: {
            type: dataTypes.STRING(50)
        },
        descripcion: {
            type: dataTypes.STRING(100)
        },
    }

    let config = {
        tableName : "productos",
        timestamps:true,
    };

    const Producto = sequelize.define(alias, cols, config);
    
    Producto.associate = function(models) {
        Producto.belongsTo(models.User, {
            as: "usuarios",
            foreingKey: "usuario_id"
        });
    }
    return Producto;

}