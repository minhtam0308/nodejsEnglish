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
var _PutChangeInforUser = require("../controllers/PutChangeInforUser");
var _Get5His = require("../controllers/Get5His");
var _DelHisUser = require("../controllers/DelHisUser");
var _GetUserAccount = require("../controllers/superior/GetUserAccount");
var _DeleteUserAccount = require("../controllers/superior/DeleteUserAccount");
var _PutUpUserToTeach = require("../controllers/superior/PutUpUserToTeach");
var _GetAdminAccount = require("../controllers/superior/GetAdminAccount");
var _PostComment = require("../controllers/PostComment");
var _GetComment = require("../controllers/superior/GetComment");
var _DelComment = _interopRequireDefault(require("../controllers/superior/DelComment"));
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
  router.get('/api/Get5His', _Get5His.Get5His);
  router.put('/api/PutChangeInforUser', _PutChangeInforUser.PutChangeInforUser);
  router["delete"]('/api/DelHisUser', _DelHisUser.DelHisUser);
  router.post('/api/PostComment', _PostComment.PostComment);

  //supertior
  router.get('/api/get5AccountUser', _GetUserAccount.Get5UserAccount);
  router.get('/api/getAllAccountUser', _GetUserAccount.GetAllUserAccount);
  router["delete"]('/api/DeleteUserAccount', _DeleteUserAccount.DeleteUserAccount);
  router.put('/api/PutUpUserToTeach', _PutUpUserToTeach.PutUpUserToTeach);
  router.get('/api/Get5AdminAccount', _GetAdminAccount.Get5AdminAccount);
  router.get('/api/GetAllAdminAccount', _GetAdminAccount.GetAllAdminAccount);
  router.get('/api/GetAllComment', _GetComment.GetAllComment);
  router.get('/api/Get5Comment', _GetComment.Get5Comment);
  router["delete"]('/api/DelComment', _DelComment["default"]);
  router.get('/', function (req, res) {
    return res.send('test');
  });
  return app.use('/', router);
};
module.exports = {
  web: web
};