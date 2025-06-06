'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Lession extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Lession.init({
        title: DataTypes.STRING,
        image: DataTypes.BLOB('medium'),
        description: DataTypes.TEXT,
        level: DataTypes.INTEGER,
        id_teacher: DataTypes.INTEGER,
        deleteAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Lession',
        tableName: 'Lession'
    });
    return Lession;
};