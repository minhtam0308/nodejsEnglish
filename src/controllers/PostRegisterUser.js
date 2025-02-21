const bcrypt = require('bcryptjs');
const { ApiRegisterUser } = require('../api/apiUser');
const salt = bcrypt.genSaltSync(10);
const PostRegisterUser = async (req, res) => {
    let data = req.body;
    if (!data.userName || !data.role || !data.email || !data.password) {
        return res.status(200).json({
            EC: 2,
            EM: "Not Enought Data"
        })
    }
    data.password = bcrypt.hashSync(data.password, salt);

    let api = await ApiRegisterUser({
        userName: data.userName,
        role: data.role,
        email: data.email,
        password: data.password,
        image: data.image
    });
    if (api === 0) {
        return res.status(200).json({
            EC: 0,
            EM: "Register Success"
        });
    } else if (api === 1) {
        return res.status(200).json({
            EC: 1,
            EM: "Your Email exised"
        });
    } else {
        return res.status(200).json({
            EC: 3,
            EM: "ERROR BACKEND"
        });
    }

}
module.exports = {
    PostRegisterUser
}