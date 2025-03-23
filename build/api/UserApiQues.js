"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
//dung require moi co du doan
var db = require('../models');
var _require = require('uuid'),
  uuidv4 = _require.v4;
var apiUserGetQAByidLess = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
    var res, ques, i, temp, ans;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          res = [];
          _context.next = 4;
          return db.Question.findAll({
            where: {
              id_lession: id
            }
          });
        case 4:
          ques = _context.sent;
          i = 0;
        case 6:
          if (!(i < ques.length)) {
            _context.next = 16;
            break;
          }
          temp = void 0;
          _context.next = 10;
          return db.Answer.findAll({
            attributes: {
              exclude: ['is_true']
            },
            where: {
              id_question: ques[i].id
            }
          });
        case 10:
          ans = _context.sent;
          temp = {
            cont: ques[i].description,
            image: ques[i].image,
            id: ques[i].id,
            ans: ans
          };
          res.push(temp);
        case 13:
          i++;
          _context.next = 6;
          break;
        case 16:
          return _context.abrupt("return", res);
        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", ["ERROR DATABASE"]);
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 19]]);
  }));
  return function apiUserGetQAByidLess(_x) {
    return _ref.apply(this, arguments);
  };
}();
var apiCheckCorrAns = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(idAns, idQues, idLess, time, idtk) {
    var corr;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return db.Answer.findByPk(idAns);
        case 3:
          corr = _context2.sent;
          _context2.next = 6;
          return db.History.create({
            time: time,
            correct: corr.is_true,
            idAns: idAns,
            idQues: idQues,
            idLess: idLess,
            idtk: idtk
          });
        case 6:
          return _context2.abrupt("return", corr);
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function apiCheckCorrAns(_x2, _x3, _x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var apiGetMaxTimeLessById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id, idtk) {
    var res;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return db.History.max('time', {
            where: {
              idLess: id,
              idtk: idtk
            }
          });
        case 3:
          res = _context3.sent;
          return _context3.abrupt("return", res);
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function apiGetMaxTimeLessById(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();
var apiFindCorrAns = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(idQues) {
    var arrAns, corr, i;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          arrAns = [];
          if (!idQues) {
            _context4.next = 7;
            break;
          }
          _context4.next = 5;
          return db.Answer.findAll({
            where: {
              id_question: idQues
            }
          });
        case 5:
          corr = _context4.sent;
          if (corr && corr.length > 0) {
            for (i = 0; i < corr.length; i++) {
              if (corr[i].is_true === true || corr[i].is_true === 1) {
                arrAns.push(corr[i].id);
              }
            }
          }
        case 7:
          return _context4.abrupt("return", arrAns);
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function apiFindCorrAns(_x9) {
    return _ref4.apply(this, arguments);
  };
}();

//this api is temporary
var apiGetHis = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(idtk) {
    var _final, resHis, i, resLess, countQues;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _final = [];
          _context5.next = 4;
          return db.History.findAll({
            where: {
              idtk: idtk
            },
            group: ["idLess", "time"],
            order: [['startAt', 'DESC']],
            attributes: ['idLess', "time", [db.sequelize.fn('sum', db.sequelize.col('correct')), 'countCorrect'], [db.sequelize.fn('min', db.sequelize.col('createdAt')), 'startAt'], [db.sequelize.fn('max', db.sequelize.col('createdAt')), 'finishAt']]
            // logging: true
          });
        case 4:
          resHis = _context5.sent;
          i = 0;
        case 6:
          if (!(i < resHis.length)) {
            _context5.next = 17;
            break;
          }
          _context5.next = 9;
          return db.Lession.findOne({
            where: {
              id: resHis[i].idLess,
              deleteAt: null
            }
          });
        case 9:
          resLess = _context5.sent;
          _context5.next = 12;
          return db.Question.findAll({
            where: {
              id_lession: resHis[i].idLess
            },
            group: ["id_lession"],
            attributes: [[db.sequelize.fn('count', db.sequelize.col('id')), 'countQues']]
          });
        case 12:
          countQues = _context5.sent;
          _final = [].concat(_toConsumableArray(_final), [{
            HisInfor: resHis[i],
            LessInfor: resLess,
            countQues: countQues[0].countQues
          }]);
        case 14:
          i++;
          _context5.next = 6;
          break;
        case 17:
          return _context5.abrupt("return", _final);
        case 20:
          _context5.prev = 20;
          _context5.t0 = _context5["catch"](0);
          console.log("error from apiGetHis", _context5.t0);
          return _context5.abrupt("return", null);
        case 24:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 20]]);
  }));
  return function apiGetHis(_x10) {
    return _ref5.apply(this, arguments);
  };
}();
var apiChangeInforUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id, userName, imageUser) {
    var res;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return db.User.findOne({
            where: {
              id: id
            },
            raw: false
          });
        case 3:
          res = _context6.sent;
          res.userName = userName;
          res.image = imageUser;
          _context6.next = 8;
          return res.save();
        case 8:
          return _context6.abrupt("return", 1);
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          console.log("error from apiChangeInforUser", _context6.t0);
          return _context6.abrupt("return", null);
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 11]]);
  }));
  return function apiChangeInforUser(_x11, _x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}();
var apiGet5His = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(idtk) {
    var _final2, resHis, i, resLess, countQues;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _final2 = [];
          _context7.next = 4;
          return db.History.findAll({
            where: {
              idtk: idtk
            },
            group: ["idLess", "time"],
            order: [['startAt', 'DESC']],
            //not createAt diffirent name
            limit: 5,
            attributes: ['idLess', "time", [db.sequelize.fn('count', db.sequelize.col('correct')), 'countQues'], [db.sequelize.fn('sum', db.sequelize.col('correct')), 'countCorrect'], [db.sequelize.fn('min', db.sequelize.col('createdAt')), 'startAt'], [db.sequelize.fn('max', db.sequelize.col('createdAt')), 'finishAt']]
            // logging: true
          });
        case 4:
          resHis = _context7.sent;
          i = 0;
        case 6:
          if (!(i < resHis.length)) {
            _context7.next = 17;
            break;
          }
          _context7.next = 9;
          return db.Lession.findOne({
            where: {
              id: resHis[i].idLess,
              deleteAt: null
            }
          });
        case 9:
          resLess = _context7.sent;
          _context7.next = 12;
          return db.Question.findAll({
            where: {
              id_lession: resHis[i].idLess
            },
            group: ["id_lession"],
            attributes: [[db.sequelize.fn('count', db.sequelize.col('id')), 'countQues']]
          });
        case 12:
          countQues = _context7.sent;
          _final2 = [].concat(_toConsumableArray(_final2), [{
            HisInfor: resHis[i],
            LessInfor: resLess,
            countQues: countQues[0].countQues
          }]);
        case 14:
          i++;
          _context7.next = 6;
          break;
        case 17:
          return _context7.abrupt("return", _final2);
        case 20:
          _context7.prev = 20;
          _context7.t0 = _context7["catch"](0);
          console.log("error from get5his: ", _context7.t0);
          return _context7.abrupt("return", null);
        case 24:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 20]]);
  }));
  return function apiGet5His(_x14) {
    return _ref7.apply(this, arguments);
  };
}();
var apiDelHisUser = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(time, idLess, idtk) {
    var res;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return db.History.destroy({
            where: {
              time: time,
              idLess: idLess,
              idtk: idtk
            }
          });
        case 3:
          res = _context8.sent;
          return _context8.abrupt("return", res);
        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return function apiDelHisUser(_x15, _x16, _x17) {
    return _ref8.apply(this, arguments);
  };
}();
module.exports = {
  apiUserGetQAByidLess: apiUserGetQAByidLess,
  apiCheckCorrAns: apiCheckCorrAns,
  apiGetMaxTimeLessById: apiGetMaxTimeLessById,
  apiFindCorrAns: apiFindCorrAns,
  apiGetHis: apiGetHis,
  apiChangeInforUser: apiChangeInforUser,
  apiGet5His: apiGet5His,
  apiDelHisUser: apiDelHisUser
};