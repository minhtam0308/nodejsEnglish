
//dung require moi co du doan
const db = require('../models');
const { v4: uuidv4 } = require('uuid');

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


const apiCheckCorrAns = async (idAns, idQues, idLess, time, idtk) => {

    try {
        let corr = await db.Answer.findByPk(idAns);
        await db.History.create({
            time: time,
            correct: corr.is_true,
            idAns: idAns,
            idQues: idQues,
            idLess: idLess,
            idtk: idtk
        })
        return corr;
    } catch (e) {
        console.log(e);
    }
}
const apiGetMaxTimeLessById = async (id, idtk) => {
    try {
        let res = await db.History.max('time', {
            where: {
                idLess: id,
                idtk: idtk
            }
        })
        return res;
    } catch (e) {
        console.log(e)
    }
}

const apiFindCorrAns = async (idQues) => {
    try {
        let arrAns = [];
        if (idQues) {
            let corr = await db.Answer.findAll({
                where: { id_question: idQues }
            });



            if (corr && corr.length > 0) {
                for (let i = 0; i < corr.length; i++) {
                    if (corr[i].is_true === true || corr[i].is_true === 1) {
                        arrAns.push(corr[i].id);
                    }
                }
            }
        }
        return arrAns;
    } catch (e) {
        console.log(e);
    }
}

//thu viet hoa

module.exports = {
    apiUserGetQAByidLess,
    apiCheckCorrAns,
    apiGetMaxTimeLessById,
    apiFindCorrAns,

}