const { apiGetAllLessionByTeach } = require("../../api/apiLession");

const GetAllLessionTeach = async (req, res) => {
    let list = await apiGetAllLessionByTeach(req.body.idRefreshToken);
    return res.status(200).json({
        EC: 0,
        EM: "Get User Success",
        data: list
    });
}
module.exports = {
    GetAllLessionTeach
}