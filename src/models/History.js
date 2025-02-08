'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    History.init({
        id_question: DataTypes.INTEGER,
        time: DataTypes.INTEGER,
        correct: DataTypes.BOOLEAN,
        idAns: DataTypes.INTEGER,
        idQues: DataTypes.INTEGER,
        idLess: DataTypes.INTEGER,
        createdAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'History',
        tableName: 'History'
    }
    );
    return History;
};