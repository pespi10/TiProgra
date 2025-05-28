module.exports = function (sequelize, dataTypes){
    let alias = "Comment"
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING(255)
        },
    };
    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored:true
    };
    const Comment = sequelize.define(alias,cols,config);

    Comment.associate = function(models) {
        Comment.belongsTo(models.User, {
            as: "usuarios",
            foreignKey: "usuario_id"
        });
    }
    return Comment
}
