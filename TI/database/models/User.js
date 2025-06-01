module.exports = function (sequelize, dataTypes){

    let alias = 'User';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        username: {
            type: dataTypes.STRING(50),
            unique: true
        },
        email: {
            type: dataTypes.STRING(50),
            unique: true
        },
        password: {
            type: dataTypes.STRING(255)
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
        remember_token: {
            type: dataTypes.BOOLEAN
        }
    }

    let config = {
        tableName : "usuarios",
        timestamps: true,
        underscored:false
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