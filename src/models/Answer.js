'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Answer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Answer.init({
        id_question: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        is_true: DataTypes.BOOLEAN

    }, {
        sequelize,
        modelName: 'Answer',
        tableName: 'Answer'
    });
    return Answer;
};