"use strict";

require('dotenv').config();
module.exports = {
  "development": {
    //all undefine khi không có file .sequelizerc nhưng lúc in ra ở index vẫn ra đúng do npx sequelize-cli db:migrate chỉ chạy file config.json mà không quan tâm file khác:))
    "username": process.env.HOST_PRO_USERNAME,
    "password": process.env.HOST_PRO_PASSWORD,
    "database": process.env.HOST_PRO_DB,
    "host": process.env.HOST_PRO,
    "dialect": "mysql",
    "port": process.env.PORT_DB,
    // phải viết dõ nếu chưa có file .sequelizerc chỉ khi sử dụng npx sequelize-cli db:migrate do nó chỉ đọc file config.json chứ k đọc js
    // "username": 'avna...',
    // "password": 'AVNS_TW... ',
    // "database": 'englishDB',
    // "host": 'mysql-2c456a3e-...',
    // "dialect": "mysql",
    // "port": '...',
    "logging": false,
    "query": {
      "raw": true
    },
    "timezone": "+07:00"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.HOST_PRO_USERNAME,
    "password": process.env.HOST_PRO_PASSWORD,
    "database": process.env.HOST_PRO_DB,
    "host": process.env.HOST_PRO,
    "dialect": "mysql",
    "port": process.env.PORT_DB,
    "logging": false,
    "query": {
      "raw": true
    },
    "timezone": "+07:00"
  }
};