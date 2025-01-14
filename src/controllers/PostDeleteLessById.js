
import { apiDeleteLessByid } from '../api/apiLession'

const PostDeleteLessById = async (req, res) => {
    const data = req.body;
    if (data) {
        if (!data.id) {
            return res.status(200).json({
                EC: 2,
                EM: "You need to write id"
            })
        } else {
            let suc = await apiDeleteLessByid(data.id);
            if (suc === true) {
                return res.status(200).json({
                    EC: 3,
                    EM: "Id You Delete Do Not Exist"//khong xay ra
                })
            }
            return res.status(200).json({
                EC: 0,
                EM: "Delete Success"
            })
        }
    } else {
        return res.status(200).json({
            EC: 1,
            EM: "You need to write data"
        })
    }
}

module.exports = { PostDeleteLessById }