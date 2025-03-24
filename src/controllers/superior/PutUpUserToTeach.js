const { apiUpUserToTeach } = require("../../api/apiSuperior")


const PutUpUserToTeach = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            EC: 1,
            EM: "Not Enought Data"
        })
    }
    let api = await apiUpUserToTeach(req.body.id);
    if (api) {
        return res.status(200).json({
            EC: 0,
            EM: "Update Success"
        })
    } else if (api === null) {
        return res.status(200).json({
            EC: 2,
            EM: "Not exist account"
        })
    }
    return res.status(200).json({
        EC: 3,
        EM: "ERROR FROM BACKEND"
    })
}
module.exports = { PutUpUserToTeach }