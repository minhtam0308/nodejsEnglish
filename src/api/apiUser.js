const db = require('../models');
const { v4: uuidv4 } = require('uuid');


//register
const ApiRegisterUser = async (data) => {
    try {
        let existEmail = await db.User.findOne({
            where: {
                email: data.email,
            },
            raw: false

        });
        if (existEmail?.status === 1 || existEmail?.status === true) {
            return 1;
        }
        data.token = uuidv4();

        if (existEmail?.status === 0 || existEmail?.status === false) {
            existEmail.image = data.image;
            existEmail.password = data.password;
            existEmail.userName = data.UserName;
            existEmail.token = data.token;
            await existEmail.save();
            return 0;
        }

        await db.User.create(data);
        return 0;
    } catch (e) {
        console.log(e);
        return 2;
    }
}

//login
const apiLogInUser = async (email) => {
    try {

        let res = await db.User.findOne({
            where: {
                email: email,
                status: 1
            },
            attributes: { exclude: ['updatedAt', 'createdAt'] }

        })
        return res;
    } catch (e) {
        console.log(e);
    }
}

//get token and send email
const apiGetUserToVerify = async (email) => {
    try {

        let res = await db.User.findOne({
            where: {
                email: email,
                status: 0
            },
            attributes: { exclude: ['updatedAt', 'createdAt'] }

        })
        return res;
    } catch (e) {
        console.log(e);
    }
}

//check user when refresh
const apiGetrefreshLogin = async (id) => {
    try {
        let res = await db.User.findOne({
            where: { id: id },
            attributes: { exclude: ['password', 'updatedAt', 'createdAt'] }
        }
        );
        return res

    } catch (e) {
        console.log(e);
    }
}

//verify user when click verify from email
const apiUpdateStatusVerify = async (token_verify, idtk) => {
    try {
        let res = await db.User.findOne({
            where: {
                id: idtk,
                token: token_verify
            },
            raw: false
        }
        );
        // console.log(res.status);
        if (res.status === 0 || res.status === false) {
            res.status = 1;
            await res.save();
            return 0;
        } else {

            return 1;
        }

    } catch (e) {
        console.log(e);
    }
}

//change pass word
const apiChangePassword = async (id, newPass) => {
    try {
        let res = await db.User.findOne({
            where: { id: id },
            raw: false
        }
        );
        res.password = newPass;
        await res.save();
        return 0;
    } catch (e) {
        console.log(e)
    }
}

//find user by id +to change pass by iduser
const apiGetUserById = async (id) => {
    try {
        let res = await db.User.findOne({
            where: { id: id }
        }
        );
        return res;
    } catch (e) {
        console.log(e)
    }
}

const apiPostComment = async (id_tk, comment) => {
    try {
        let res = await db.Comment.create({
            id_tk, comment
        }
        );
        return res;
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    ApiRegisterUser,
    apiLogInUser,
    apiGetrefreshLogin,
    apiUpdateStatusVerify,
    apiGetUserToVerify,
    apiChangePassword,
    apiGetUserById,
    apiPostComment
}