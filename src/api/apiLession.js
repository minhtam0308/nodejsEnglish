
import db from '../models'


const apiCreateLession = async (data) => {

    // console.log(data)

    try {
        // await db.Lession.findAll();
        await db.Lession.create({
            title: data.title,
            image: data.image,
            description: data.description,
            level: data.level
        });
        return "Create Lession Success";
    } catch (e) {
        console.log(e);
        return "Error From API";
    }
}

const apiGetAllLession = async () => {
    try {
        const res = await db.Lession.findAll(
            { where: { deleteAt: null } }
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
    apiDeleteLessByid

};