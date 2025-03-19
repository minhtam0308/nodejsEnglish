const { apiDelHisUser } = require("../api/UserApiQues")


const DelHisUser = async (req, res) => {
    let data = req.body;


    if (!data || !data.time || !data.idLess) {
        return res.status(200).json({
            EC: 1,
            EM: "Not Enough Data"
        })
    }
    let api = await apiDelHisUser(data.time, data.idLess, data.idRefreshToken);
    if (api) {
        return res.status(200).json({
            EC: 0,
            EM: "Delete success"
        })
    } else {
        return res.status(200).json({
            EC: 2,
            EM: "History not exist"
        })
    }
}

module.exports = { DelHisUser }