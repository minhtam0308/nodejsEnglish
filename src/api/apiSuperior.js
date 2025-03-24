const db = require('../models');

const apiGet5User = async () => {
    try {
        let res = await db.User.findAll({
            where: { role: "USER" },
            order: [['createdAt', 'DESC']], //not createAt diffirent name
            limit: 5,
            attributes: [
                'id',
                'userName',
                'image',
                'email',
                "role"
                // 'createAt'
            ],
            // logging: true
        })
        return res;
    } catch (e) {
        console.log("ERROR FROM GET5USER SUPERIOR", e);
    }
}

const apiGetAllUser = async () => {
    try {
        let res = await db.User.findAll({
            where: { role: "USER" },
            order: [['createdAt', 'DESC']], //not createAt diffirent name
            attributes: [
                'id',
                'userName',
                'image',
                'email',
                "role"
                // 'createAt'
            ],
            // logging: true
        })
        return res;
    } catch (e) {
        console.log("ERROR FROM GET5USER SUPERIOR", e);
    }
}

const apiDelUserById = async (id) => {
    try {
        let res = await db.User.destroy({
            where: {
                id: id
            }
        })
        return res;
    } catch (e) {
        console.log("ERROR FORM DEL USER", e);
    }
}

const apiUpUserToTeach = async (id) => {
    try {
        let res = await db.User.findByPk(id, {
            raw: false
        });
        if (res) {
            res.role = "ADMIN";
            await res.save();
            return res;
        } else {
            return null;
        }
    } catch (e) {
        console.log("ERROR FORM UP USER", e);
    }
}


//admin account
const apiGet5Admin = async () => {
    try {
        let res = await db.User.findAll({
            where: { role: "ADMIN" },
            order: [['createdAt', 'DESC']], //not createAt diffirent name
            limit: 5,
            attributes: [
                'id',
                'userName',
                'image',
                'email',
                "role"
                // 'createAt'
            ],
            // logging: true
        })
        return res;
    } catch (e) {
        console.log("ERROR FROM GET5ADMIN SUPERIOR", e);
    }
}

const apiGetAllAdmin = async () => {
    try {
        let res = await db.User.findAll({
            where: { role: "ADMIN" },
            order: [['createdAt', 'DESC']], //not createAt diffirent name
            attributes: [
                'id',
                'userName',
                'image',
                'email',
                "role"
                // 'createAt'
            ],
            // logging: true
        })
        return res;
    } catch (e) {
        console.log("ERROR FROM GET5ADMIN SUPERIOR", e);
    }
}

module.exports = {
    apiGet5User,
    apiGetAllUser,
    apiDelUserById,
    apiUpUserToTeach,
    apiGet5Admin,
    apiGetAllAdmin
}

