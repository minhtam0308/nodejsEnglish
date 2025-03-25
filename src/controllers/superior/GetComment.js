const { apiGet5Comment, apiGetAllComment } = require("../../api/apiSuperior");


const Get5Comment = async (req, res) => {
    const api = await apiGet5Comment();

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

const GetAllComment = async (req, res) => {
    const api = await apiGetAllComment();

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
    Get5Comment,
    GetAllComment
}