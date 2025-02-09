import { apiFindCorrAns } from '../api/UserApiQues'

const GetFindCorrAns = async (req, res) => {
    let api = await apiFindCorrAns(req.query.idQues);
    if (api && api.length > 0) {
        return res.status(200).json({
            EC: 0,
            EM: api
        })
    } else {
        return res.status(200).json({
            EC: 1,
            EM: "ERROR"
        })
    }
}

module.exports = {
    GetFindCorrAns
}