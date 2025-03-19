const { apiGet5His } = require("../api/UserApiQues");

const Get5His = async (req, res) => {
    let api = await apiGet5His(req.body.idRefreshToken);
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
}

module.exports = { Get5His };