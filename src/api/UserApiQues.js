import db from '../models'

const apiUserGetQAByidLess = async (id) => {
    try {
        let res = [];
        let ques = await db.Question.findAll({
            where: {
                id_lession: id
            }
        });
        for (let i = 0; i < ques.length; i++) {
            let temp;
            let ans = await db.Answer.findAll({
                attributes: { exclude: ['is_true'] },
                where: {
                    id_question: ques[i].id
                }
            })
            temp = {
                cont: ques[i].description,
                image: ques[i].image,
                id: ques[i].id,
                ans
            }
            res.push(temp)
        }
        // console.log(res)
        return res;
    } catch (e) {

        console.log(e);
        return ["ERROR DATABASE"];
    }
}


const apiCheckCorrAns = async (idAns, idQues, idLess, time) => {

    try {
        let corr = await db.Answer.findByPk(idAns);
        await db.History.create({
            time: time,
            correct: corr.is_true,
            idAns: idAns,
            idQues: idQues,
            idLess: idLess
        })
        return corr;
    } catch (e) {
        console.log(e);
    }
}
const apiGetMaxTimeLessById = async (id) => {
    try {
        let res = await db.History.max('time', {
            where: {
                idLess: id
            }
        })
        return res;
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    apiUserGetQAByidLess,
    apiCheckCorrAns,
    apiGetMaxTimeLessById
}