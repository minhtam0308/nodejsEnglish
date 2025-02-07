import { apiChangeLessById } from '../api/apiLession'

const PostUpdateLessById = async (req, res) => {
    let data = req.body;
    if (data) {
        // data.level === null because data.level=0 so !data.level =1 true
        if (!data.title || !data.description || data.level === null || !data.id) {
            return res.status(200).json(
                {
                    EC: 2,
                    EM: "You need to write enough data"
                }
            )
        } else {
            await apiChangeLessById(data);
            return res.status(200).json(
                {
                    EC: 0,
                    EM: "Update Success"
                }
            )
        }
    } else {
        return res.status(200).json(
            {
                EC: 1,
                EM: "You need to write data"
            }
        )
    }


}

module.exports = {
    PostUpdateLessById
}