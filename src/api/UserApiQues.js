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
module.exports = {
    apiUserGetQAByidLess
}