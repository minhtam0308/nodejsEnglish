

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
        for (let i = 0; i < data.ans.length; i++) {
            await db.Answer.create({
                id_question: resQues.id,
                description: data.ans[i].cont,
                is_true: data.ans[i].is_true
            })
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

const apiUpdateQues = async (data) => {
    // arrDelete, ques
    try {
        if (data && data.arrDelete && data.arrDelete.length > 0) {
            for (let i = 0; i < data.arrDelete.length; i++) {
                if (data.arrDelete[i] > 0) {
                    let resDele = await db.Answer.destroy({
                        where: {
                            id: data.arrDelete[i],
                        }
                    })
                    if (resDele !== 1) {
                        return "ERROR IN SERVER";
                    }
                }
            }

        }
        await db.Question.update(
            {
                image: data.ques.image,
                description: data.ques.cont
            },
            {
                where: {
                    id: data.ques.id,
                },
            },
        );

        for (let i = 0; i < data.ques.ans.length; i++) {
            if (data.ques.ans[i].id <= 0) {
                await db.Answer.create({
                    id_question: data.ques.id,
                    description: data.ques.ans[i].description,
                    is_true: data.ques.ans[i].is_true
                })
                // console.log("Answwer: ", resCreateAns);
            } else {
                await db.Answer.update(
                    {
                        description: data.ques.ans[i].description,
                        is_true: data.ques.ans[i].is_true
                    },
                    {
                        where: {
                            id: data.ques.ans[i].id
                        }
                    }
                )
            }
        }
        return "Update Success";

    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    apiCreateQues,
    apiGetAllQA,
    apiDeleteQuesById,
    apiUpdateQues
}