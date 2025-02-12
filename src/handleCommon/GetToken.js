
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const GetBase64url = (object) => {
    let objactEncoded = JSON.stringify(object);
    return btoa(objactEncoded).replace(/\+/g, '-').replace(/\=/g, '').replace(/\//g, '-');
}

const GetToken = (header, payload, signature) => {
    let headerEncoded = GetBase64url(header);
    let payloadEncoded = GetBase64url(payload);
    let token = `${headerEncoded}.${payloadEncoded}`;
    let hash = bcrypt.hashSync(`${token}.${signature}`, salt);
    return `${token}.${hash}`;
}
module.exports = {
    GetToken
}