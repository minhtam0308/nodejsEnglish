
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
        const res = await db.Lession.findAll();
        return res;
    } catch (e) {
        console.log("loi", e);
    }
}

module.exports = {
    apiCreateLession,
    apiGetAllLession

};