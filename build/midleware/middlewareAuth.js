"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middlewareAuth = void 0;
var _crypto = require("crypto");
require('dotenv').config();
var middlewareAuth = exports.middlewareAuth = function middlewareAuth(req, res, next) {
  var _req$headers;
  var while_list = ['/', '/api/PostRegisterUser', '/api/PostLoginUser', '/api/PostSendEmail', '/api/PutUpdateVerify'];
  var admin_list = ['/api/postCreateLession', '/api/GetAllLessionTeach', '/api/postUpdateLessById', '/api/postDeleteLessById', '/api/postCreateQues', '/api/getAllQA', '/api/postDeleteQuesById', '/api/PostUpdateQuestion'];
  var superior_list = ['/api/get5AccountUser', '/api/getAllAccountUser', '/api/DeleteUserAccount', '/api/PutUpUserToTeach', '/api/Get5AdminAccount', '/api/GetAllAdminAccount', '/api/DelComment'];
  if (while_list.find(function (val) {
    return val === req.originalUrl;
  })) {
    next();
    return;
  }
  if (req !== null && req !== void 0 && (_req$headers = req.headers) !== null && _req$headers !== void 0 && _req$headers.authorization) {
    var token = req.headers.authorization.slice(7).split('.');
    if (token.length === 3) {
      var hash = (0, _crypto.createHmac)('sha256', process.env.SIGNATURE).update("".concat(token[0], ".").concat(token[1])).digest('hex');
      if (hash === token[2]) {
        var infor = JSON.parse(Buffer.from(token[1], 'base64').toString());
        if (infor.role === 'USER' && admin_list.find(function (val) {
          return val === req.originalUrl;
        })) {
          return res.status(401).json({
            EC: 1,
            EM: "You are not ADMIN"
          });
        }
        if (infor.role !== 'SUPERIOR' && superior_list.find(function (val) {
          return val === req.originalUrl;
        })) {
          return res.status(401).json({
            EC: 1,
            EM: "You are not SUPERIOR"
          });
        }
        if (infor.exp > Date.now()) {
          req.body.idRefreshToken = infor.id;
          next();
          return;
        } else {
          return res.status(200).json({
            EC: 1,
            EM: "Token is expired"
          });
        }
      } else {
        return res.status(401).json({
          EC: 1,
          EM: "Token is incorrect"
        });
      }
    } else {
      return res.status(401).json({
        EC: 1,
        EM: "Token is incorrect"
      });
    }
  }
  return res.status(401).json({
    EC: 2,
    EM: "not yet login"
  });
};