
import { apiUserGetQAByidLess } from '../api/UserApiQues'

const GetAllQAByUser = async (req, res) => {
    let id = req.query.id;
    let api = await apiUserGetQAByidLess(id);
    return res.status(200).json({
        EC: 0,
        EM: "Get Data Success",
        data: api
    })
}

module.exports = {
    GetAllQAByUser
}