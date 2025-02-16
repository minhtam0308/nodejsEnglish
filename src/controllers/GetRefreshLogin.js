const { apiGetrefreshLogin } = require("../api/UserApiQues")

export const GetRefreshLogin = async (req, res) => {
    const api = await apiGetrefreshLogin(req?.body?.idRefreshToken);
    if (api) {
        return res.status(200).json({
            EC: 0,
            EM: "success",
            user: api
        })
    } else {
        return res.status(401).json({
            EC: 1,
            EM: "Accout not exist"
        })
    }


}
