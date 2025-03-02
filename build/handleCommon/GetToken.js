"use strict";

var _crypto = require("crypto");
var GetBase64url = function GetBase64url(object) {
  var objactEncoded = JSON.stringify(object);
  return btoa(objactEncoded).replace(/\+/g, '-').replace(/\=/g, '').replace(/\//g, '-');
};
var GetToken = function GetToken(header, payload, signature) {
  var headerEncoded = GetBase64url(header);
  var payloadEncoded = GetBase64url(payload);
  var token = "".concat(headerEncoded, ".").concat(payloadEncoded);
  // const hash = createHmac('sha256', signature)
  //     .update(token)  // updating data
  // .digest('hex');
  var hash = (0, _crypto.createHmac)('sha256', signature).update(token).digest('hex');
  return "".concat(token, ".").concat(hash);
};
module.exports = {
  GetToken: GetToken
};