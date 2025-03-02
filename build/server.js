"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _web = require("./routes/web");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _require = require('./config/connectDB'),
  ConnectDB = _require.ConnectDB;
var cors = require('cors');
require('dotenv').config();
var app = (0, _express["default"])();

//display data when post (req.body)
app.use(_bodyParser["default"].json({
  limit: '3mb'
}));
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));

// CORS error
// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     // Pass to next layer of middleware
//     next();
// })

//enables cors
app.use(cors({
  'origin': process.env.HOST_FRONTEND
}));
(0, _web.web)(app);

//test connect db
ConnectDB();
var port = process.env.PORT;
app.listen(port, function () {
  console.log('app running on port ', port);
});