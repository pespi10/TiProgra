module.exports = function (sequelize, dataTypes){

    let alias = 'User';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING(50)
        },
        password: {
            type: dataTypes.STRING(50)
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING(50)
        },
    }

    let config = {
        tableName : "users",
        timestamps:true,
        underscored: true,
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Producto,{
            as: "productos",
            foreingKey: "usuario_id"
        })
        User.hasMany(models.Comment,{
            as:"comentarios",
            foreingKey: "usuario_id"
        })
    }

    return User;

}