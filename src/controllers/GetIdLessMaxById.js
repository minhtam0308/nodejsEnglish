import { apiGetMaxTimeLessById } from '../api/UserApiQues'

const GetIdLessMaxById = async (req, res) => {
    if (req.query.id) {
        let api = await apiGetMaxTimeLessById(req.query.id, req.body.idRefreshToken);
        return res.status(200).json({
            EC: 0,
            EM: api
        })
    }
    return res.status(200).json({
        EC: 1,
        EM: "YOUR DATA IS NOT ENOUGH"
    })

}

module.exports = {
    GetIdLessMaxById
}