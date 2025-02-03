import { apiDeleteQuesById } from '../api/apiQuestion'


const PostDeleteQuesById = async (req, res) => {
    let api = await apiDeleteQuesById(req.body.id);
    //when success api == 1
    if (api === 1) {
        return res.status(200).json({
            EC: 0,
            EM: "Delete Success"
        });
    }
    return res.status(200).json({
        EC: 1,
        EM: "Your Question is not exist"
    });

    // console.log(req.body)
}

module.exports = { PostDeleteQuesById }