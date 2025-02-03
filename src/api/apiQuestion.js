

import db from '../models'

const apiCreateQues = async (data) => {
    try {
        let resQues = await db.Question.create({
            id_lession: data.idLession,
            image: data.ques.image,
            description: data.ques.cont
        })
        // let test = await data.ans.map(async (val, index) => {
        //     await db.Answer.create({
        //         id_question: resQues.id,
        //         description: val.cont,
        //         is_true: val.is_true
        //     })
        // })

        //do bat dong bo dung voi for k dung voi map
        let test = [];
        for (let i = 0; i < data.ans.length; i++) {
            test.push(await db.Answer.create({
                id_question: resQues.id,
                description: data.ans[i].cont,
                is_true: data.ans[i].is_true
            }))
        }

        return "Create question sucess";
    } catch (e) {
        console.log(e);
    }
}

const apiGetAllQA = async (data) => {
    try {
        let res = [];
        let ques = await db.Question.findAll({
            where: {
                id_lession: data.id
            }
        });
        for (let i = 0; i < ques.length; i++) {
            let temp;
            let ans = await db.Answer.findAll({
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
        console.log(e)
    }

}

const apiDeleteQuesById = async (id) => {
    try {
        let res = await db.Question.destroy({
            where: {
                id: id,
            }
        })
        return res;
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    apiCreateQues,
    apiGetAllQA,
    apiDeleteQuesById
}