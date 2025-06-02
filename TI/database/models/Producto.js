module.exports = function (sequelize, dataTypes){

    let alias = 'Producto';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuarioId: {
            type: dataTypes.INTEGER
        },
        nombreArchivoImg: {
            type: dataTypes.STRING(255)
            
        },
        nombre: {
            type: dataTypes.STRING(50)
        },
        descripcion: {
            type: dataTypes.STRING(255)
        },
    }

    let config = {
        tableName : "productos",
        timestamps: true,
        underscored:false
    };

    const Producto = sequelize.define(alias, cols, config);
    
    Producto.associate = function(models) {
        Producto.belongsTo(models.User, {
            as: "users",
            foreignKey: "usuarioId"
        });
    }
    return Producto;

}