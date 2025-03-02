'use strict';

require('dotenv').config();
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
// const process = require('process');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.js')[env];
var db = {};

// console.log("config", config)
var sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js' && file.indexOf('.test.js') === -1;
}).forEach(function (file) {
  var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//check so cot trong model
// console.log(Object.keys(db.History.rawAttributes));

// sequelize.drop(db.History);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;