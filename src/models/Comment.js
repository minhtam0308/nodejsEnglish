'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Comment.init({
        id_tk: DataTypes.INTEGER,
        comment: DataTypes.TEXT('long')

    }, {
        sequelize,
        modelName: 'Comment',
        tableName: 'Comment'
    });
    return Comment;
};