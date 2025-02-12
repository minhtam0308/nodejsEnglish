'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init({
        userName: DataTypes.STRING,
        role: DataTypes.CHAR(100),
        image: DataTypes.BLOB('medium'),
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        signature: DataTypes.STRING


    }, {
        sequelize,
        modelName: 'User',
        tableName: 'User'
    });
    return User;
};