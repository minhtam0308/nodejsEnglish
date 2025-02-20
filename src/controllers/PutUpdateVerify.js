const { apiUpdateStatusVerify } = require("../api/UserApiQues")

const PutUpdateVerify = async (req, res) => {

    let api = await apiUpdateStatusVerify(req.body.token_verify, req.body.idtk);
    if (api === 0) {
        return res.status(200).json({
            EC: 0,
            EM: "Verify Success"
        })
    } else {
        return res.status(200).json({
            EC: 1,
            EM: "Your Email Verified"
        })
    }
}
module.exports = {
    PutUpdateVerify
}