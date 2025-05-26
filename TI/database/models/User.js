module.exports = function (sequelize, dataTypes){

    let alias = 'User';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        mail: {
            type: dataTypes.STRING(50),
            unique: true
        },
        contrasena: {
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
        tableName : "usuarios",
        timestamps: true,
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "usuario_id"
        })
        User.hasMany(models.Comment,{
            as:"comentarios",
            foreignKey: "usuario_id"
        })
    }

    return User;

}