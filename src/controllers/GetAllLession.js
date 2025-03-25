
import { apiGetAllLession } from '../api/apiLession'

const GetAllLession = async (req, res) => {
    try {
        let list = await apiGetAllLession();
        return res.status(200).json({
            EC: 0,
            EM: "Get Lession Success",
            data: list
        });

    } catch (e) {
        console.log("control", e);
    }
}

module.exports = { GetAllLession }