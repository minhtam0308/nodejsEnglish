const { Sequelize } = require('sequelize');
require('dotenv').config()


// Option 3: Passing parameters separately (other dialects)
let sequelize;
if (process.env.NODE_ENV === "development") {
    sequelize = new Sequelize('backendenglish', 'root', null, {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    })
} else if (process.env.NODE_ENV === "production") {
    sequelize = new Sequelize(process.env.HOST_PRO_DB, process.env.HOST_PRO_USERNAME, process.env.HOST_PRO_PASSWORD, {
        host: process.env.HOST_PRO,
        dialect: 'mysql',
        logging: false,
        port: process.env.PORT_DB
    })
}


const ConnectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { ConnectDB };