
const db = require('../models')

const apiCreateLession = async (data) => {

    // console.log(data)

    try {
        // await db.Lession.findAll();
        await db.Lession.create({
            title: data.title,
            image: data.image,
            description: data.description,
            level: data.level,
            id_teacher: data.idRefreshToken
        });
        return "Create Lession Success";
    } catch (e) {
        console.log(e);
        return "Error From API";
    }
}

//user
const apiGetAllLession = async () => {
    try {
        let res = [];
        let teachers = await db.User.findAll(
            {
                where: { role: "ADMIN" },
                attributes: ['userName', 'id', 'image']

            }

        );
        for (let i = 0; i < teachers.length; i++) {
            let lession = await db.Lession.findAll({
                where: {
                    id_teacher: teachers[i].id,
                    deleteAt: null

                }
            })
            let temp = teachers[i];
            res.push({ teacher: temp, lession: lession });
        }

        return res;
    } catch (e) {
        console.log("loi", e);
    }
}

//teacher
const apiGetAllLessionByTeach = async (id_teacher) => {
    try {
        const res = await db.Lession.findAll(
            {
                where: {
                    deleteAt: null,
                    id_teacher: id_teacher
                }
            }
        );
        return res;
    } catch (e) {
        console.log("loi", e);
    }
}

const apiChangeLessById = async (data) => {
    try {
        await db.Lession.update(
            {
                title: data.title,
                image: data.image,
                description: data.description,
                level: data.level,
                updatedAt: new Date()
            },
            {
                where: {
                    id: data.id,
                },
            },
        );

    } catch (e) {
        console.log("api", e);
    }
}

const apiDeleteLessByid = async (id) => {
    try {
        await db.Lession.update(
            {
                deleteAt: new Date()
            },
            {
                where: {
                    id: id,
                },
            },
        );
        return false;

    } catch (e) {
        console.log("api", e);
        return true;
    }
}



module.exports = {
    apiCreateLession,
    apiGetAllLession,
    apiChangeLessById,
    apiDeleteLessByid,
    apiGetAllLessionByTeach

};