
import { apiGetAllQA } from '../api/apiQuestion'
const GetAllQA = async (req, res) => {
    // console.log("query", req.query)
    let api = await apiGetAllQA(req.query)
    return res.status(200).json({
        "EC": 0,
        "EM": "OK",
        "data": api
    })
}

module.exports = {
    GetAllQA
}