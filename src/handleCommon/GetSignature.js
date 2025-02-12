
//get random

const crypto = require('crypto');

const GetSignature = () => {
    return crypto.randomBytes(64).toString('base64url');
}

module.exports = {
    GetSignature
}