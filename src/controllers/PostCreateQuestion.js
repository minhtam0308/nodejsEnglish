import { apiCreateQues } from '../api/apiQuestion'

const PostCreateQuestion = async (req, res) => {

    const data = req.body;
    if (!data || !data.ques.cont || data.ans.length <= 0 || !data.idLession) {
        return res.status(200).json({
            "EC": 1,
            "EM": "Not Enought data"
        })
    }


    let api = await apiCreateQues(data);
    return res.status(200).json({
        "EC": 0,
        "EM": api
    });
}

module.exports = { PostCreateQuestion }