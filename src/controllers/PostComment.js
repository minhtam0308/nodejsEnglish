const { apiPostComment } = require("../api/apiUser")


const PostComment = async (req, res) => {
    if (!req.body.comment || req.body.comment === '') {
        return res.status(200).json({
            EC: 1,
            EM: "You Must Write Your Idea"
        })
    }
    let api = await apiPostComment(req.body.idRefreshToken, req.body.comment);
    if (api) {
        return res.status(200).json({
            EC: 0,
            EM: "Send Email Success"
        })
    } else {
        return res.status(200).json({
            EC: 2,
            EM: "ERROR FROM BACKEND"
        })
    }

}
module.exports = { PostComment }