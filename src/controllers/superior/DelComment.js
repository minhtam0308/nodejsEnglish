import { apiDelComment } from "../../api/apiSuperior";


const DelComment = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            EC: 1,
            EM: "Not Enough Data"
        })
    }
    let api = await apiDelComment(req.body.id); // =0 =1
    // console.log(api)
    if (api) {
        {
            return res.status(200).json({
                EC: 0,
                EM: "Delete Comment Success"
            })
        }
    } else if (api === 0) {
        return res.status(200).json({
            EC: 3,
            EM: "That Comment is not exist"
        })
    }
    return res.status(200).json({
        EC: 2,
        EM: "ERROR FROM BACKEND"
    })
}
export default DelComment;