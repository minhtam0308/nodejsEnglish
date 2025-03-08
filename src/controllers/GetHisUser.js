const { apiGetHis } = require("../api/UserApiQues")

const GetHisUser = async (req, res) => {
    let api = await apiGetHis(req.body.idRefreshToken);
    if (api) {
        return res.status(200).json({
            EC: 0,
            EM: "get History success",
            his: api
        })
    } else {
        return res.status(200).json({
            EC: 1,
            EM: "ERROR FROM BACKEND"
        })
    }
    return res.send(api);
}

module.exports = {
    GetHisUser
}