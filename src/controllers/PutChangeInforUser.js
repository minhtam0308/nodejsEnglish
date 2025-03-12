const { apiChangeInforUser } = require("../api/UserApiQues")


const PutChangeInforUser = async (req, res) => {
    let data = req.body;
    // console.log(data)
    if (!data || data.userName === '') {
        return res.status(200).json({
            EC: 1,
            EM: "Not Enough Data"
        })
    } else {
        const api = await apiChangeInforUser(data.idRefreshToken, data.userName, data.imageUser);
        if (api) {
            return res.status(200).json({
                EC: 0,
                EM: "update success"
            })
        } else {
            return res.status(200).json({
                EC: 2,
                EM: "ERROR FROM BACKEND"
            })
        }

    }

}
module.exports = { PutChangeInforUser }