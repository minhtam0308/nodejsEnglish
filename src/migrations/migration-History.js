'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('History', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            time: {
                allowNull: false,
                type: Sequelize.INTEGER
            },

            correct: {
                type: Sequelize.BOOLEAN
            },
            idAns: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            idQues: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            idLess: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            idtk: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('History');
    }
};