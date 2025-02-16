import { createHmac } from "crypto"

const GetBase64url = (object) => {
    let objactEncoded = JSON.stringify(object);
    return btoa(objactEncoded).replace(/\+/g, '-').replace(/\=/g, '').replace(/\//g, '-');
}

const GetToken = (header, payload, signature) => {
    let headerEncoded = GetBase64url(header);
    let payloadEncoded = GetBase64url(payload);
    let token = `${headerEncoded}.${payloadEncoded}`;
    // const hash = createHmac('sha256', signature)
    //     .update(token)  // updating data
    // .digest('hex');
    let hash = createHmac('sha256', signature).update(token).digest('hex');
    return `${token}.${hash}`;
}
module.exports = {
    GetToken
}