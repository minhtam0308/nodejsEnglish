
import { apiCreateLession } from '../api/apiLession'

const createLession = async (req, res) => {

    let data = req.body;
    if (data) {
        if (!data.title || !data.description || !data.level) {
            return res.status(200).json(
                {
                    EC: 2,
                    EM: "You need to write enough data"
                }
            )
        } else {
            try {
                let lession = await apiCreateLession(data);
                return res.status(200).json({
                    EC: 0,
                    EM: lession
                });
            } catch (e) {
                return res.status(500).json({
                    EC: 3,
                    EM: "ERROR code from controller"
                });
            }

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

module.exports = { createLession };