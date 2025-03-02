import { apiCheckCorrAns } from '../api/UserApiQues'

const PostCheckCorrAns = async (req, res) => {
    let data = req.body;
    if (data && data.idAns && data.idQues && data.time && data.idLess) {
        const api = await apiCheckCorrAns(data.idAns, data.idQues, data.idLess, data.time, data.idRefreshToken);
        if (api && (api.is_true === 1 || api.is_true === true)) {
            return res.status(200).json({
                EC: 0,
                EM: "Correct"
            });
        } else if (api && (api.is_true === 0 || api.is_true === false)) {
            return res.status(200).json({
                EC: 0,
                EM: "Incorrect"
            });
        } else {
            return res.status(200).json({
                EC: 1,
                EM: "ERROR BACKEND"
            });
        }
    } else {
        return res.status(200).json({
            EC: 2,
            EM: "YOUR DATA IS NOT ENOUGH"
        });
    }


}

module.exports = {
    PostCheckCorrAns
}