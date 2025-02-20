
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

module.exports = {
    apiUserGetQAByidLess,
    apiCheckCorrAns,
    apiGetMaxTimeLessById,
    apiFindCorrAns,
    ApiRegisterUser,
    apiLogInUser,
    apiGetrefreshLogin,
    apiUpdateStatusVerify
}