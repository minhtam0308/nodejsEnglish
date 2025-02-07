import { apiUpdateQues } from '../api/apiQuestion'


const PostUpdateQuestion = async (req, res) => {
    let data = req.body;
    if (data && data.ques && data.ques.ans.length > 0) {
        let api = await apiUpdateQues(data);
        return res.status(200).json({
            EC: 0,
            EM: api
        })
    } else {
        return res.status(200).json({
            EC: 1,
            EM: "ERROR NOT YET PROCESSED"
        })
    }
}

module.exports = {
    PostUpdateQuestion
}