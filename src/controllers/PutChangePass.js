
const bcrypt = require('bcryptjs');
const { apiGetUserById, apiChangePassword } = require('../api/apiUser');
const salt = bcrypt.genSaltSync(10);

const PutChangePass = async (req, res) => {
    if (!req.body.oldPass || !req.body.newPass) {
        return res.status(200).json({
            EC: 1,
            EM: "Not Enought Data"
        })
    }
    if (req.body.oldPass === req.body.newPass) {
        return res.status(200).json({
            EC: 5,
            EM: "New Password And Old Password Are The Same"
        })
    }
    let user = await apiGetUserById(req.body.idRefreshToken);
    if (bcrypt.compareSync(req.body.oldPass, user.password)) {
        let pass = bcrypt.hashSync(req.body.newPass, salt);
        let api = await apiChangePassword(user.id, pass);
        if (api === 0) {
            return res.status(200).json({
                EC: 0,
                EM: "Change Password Success"
            })
        } else {
            return res.status(200).json({
                EC: 3,
                EM: "ERROR From Backend"
            })
        }
    } else {
        return res.status(200).json({
            EC: 2,
            EM: "Password Wrong"
        })
    }

}

module.exports = {
    PutChangePass
}