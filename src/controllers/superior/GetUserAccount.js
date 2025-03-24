const { apiGet5User, apiGetAllUser } = require("../../api/apiSuperior")


const Get5UserAccount = async (req, res) => {
    const api = await apiGet5User();

    if (api) {
        return res.status(200).json({
            EC: 0,
            EM: api
        })
    }
    return res.status(200).json({
        EC: 1,
        EM: "ERROR from backend"
    })
}
const GetAllUserAccount = async (req, res) => {
    const api = await apiGetAllUser();

    if (api) {
        return res.status(200).json({
            EC: 0,
            EM: api
        })
    }
    return res.status(200).json({
        EC: 1,
        EM: "ERROR from backend"
    })
}
module.exports = {
    Get5UserAccount,
    GetAllUserAccount
}