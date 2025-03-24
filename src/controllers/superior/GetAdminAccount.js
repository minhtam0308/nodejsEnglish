
const { apiGet5Admin, apiGetAllAdmin } = require("../../api/apiSuperior")


const Get5AdminAccount = async (req, res) => {
    const api = await apiGet5Admin();

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
const GetAllAdminAccount = async (req, res) => {
    const api = await apiGetAllAdmin();

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
    Get5AdminAccount,
    GetAllAdminAccount
}