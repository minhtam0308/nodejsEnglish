"use strict";

var _express = _interopRequireDefault(require("express"));
var _CreateLesstion = require("../controllers/CreateLesstion");
var _GetAllLession = require("../controllers/GetAllLession");
var _PostUpdateLessById = require("../controllers/PostUpdateLessById");
var _PostDeleteLessById = require("../controllers/PostDeleteLessById");
var _PostCreateQuestion = require("../controllers/PostCreateQuestion");
var _PostDeleteQuesById = require("../controllers/PostDeleteQuesById");
var _PostUpdateQestion = require("../controllers/PostUpdateQestion");
var _GetAllQA = require("../controllers/GetAllQA");
var _GetAllQAByUser = require("../controllers/GetAllQAByUser");
var _PostCheckCorrAns = require("../controllers/PostCheckCorrAns");
var _GetIdLessMaxById = require("../controllers/GetIdLessMaxById");
var _GetFindCorrAns = require("../controllers/GetFindCorrAns");
var _PostRegisterUser = require("../controllers/PostRegisterUser");
var _PostLoginUser = _interopRequireDefault(require("../controllers/PostLoginUser"));
var _GetRefreshLogin = require("../controllers/GetRefreshLogin");
var _middlewareAuth = require("../midleware/middlewareAuth");
var _PostSendEmail = require("../controllers/PostSendEmail");
var _PutUpdateVerify = require("../controllers/PutUpdateVerify");
var _PutChangePass = require("../controllers/PutChangePass");
var _GetAllLessionTeach = require("../controllers/Teacher/GetAllLessionTeach");
var _GetHisUser = require("../controllers/GetHisUser");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
var web = function web(app) {
  router.all('*', _middlewareAuth.middlewareAuth);
  router.post('/api/postCreateLession', _CreateLesstion.createLession);
  router.get('/api/getAllLession', _GetAllLession.GetAllLession);
  router.post('/api/postUpdateLessById', _PostUpdateLessById.PostUpdateLessById);
  router.post('/api/postDeleteLessById', _PostDeleteLessById.PostDeleteLessById);
  router.post('/api/postCreateQues', _PostCreateQuestion.PostCreateQuestion);
  router.get('/api/getAllQA', _GetAllQA.GetAllQA);
  router.post('/api/postDeleteQuesById', _PostDeleteQuesById.PostDeleteQuesById);
  router.post('/api/PostUpdateQuestion', _PostUpdateQestion.PostUpdateQuestion);
  router.get('/api/GetAllQAByUser', _GetAllQAByUser.GetAllQAByUser);
  router.post('/api/PostCheckCorrAns', _PostCheckCorrAns.PostCheckCorrAns);
  router.get('/api/GetIdLessMaxById', _GetIdLessMaxById.GetIdLessMaxById);
  router.get('/api/GetFindCorrAns', _GetFindCorrAns.GetFindCorrAns);
  router.post('/api/PostRegisterUser', _PostRegisterUser.PostRegisterUser);
  router.post('/api/PostLoginUser', _PostLoginUser["default"]);
  router.get('/api/GetRefreshLogin', _GetRefreshLogin.GetRefreshLogin);
  router.post('/api/PostSendEmail', _PostSendEmail.PostSendEmail);
  router.put('/api/PutUpdateVerify', _PutUpdateVerify.PutUpdateVerify);
  router.put('/api/PutChangePass', _PutChangePass.PutChangePass);
  router.get('/api/GetAllLessionTeach', _GetAllLessionTeach.GetAllLessionTeach);
  router.get('/api/GetHisUser', _GetHisUser.GetHisUser);
  router.get('/', function (req, res) {
    return res.send('test');
  });
  return app.use('/', router);
};
module.exports = {
  web: web
};