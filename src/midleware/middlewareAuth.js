
import { createHmac } from "crypto"
require('dotenv').config()


export const middlewareAuth = (req, res, next) => {
    const while_list = ['/', '/api/PostRegisterUser', '/api/PostLoginUser', '/api/PostSendEmail', '/api/PutUpdateVerify'];
    const admin_list = [
        '/api/postCreateLession',
        '/api/GetAllLessionTeach',
        '/api/postUpdateLessById',
        '/api/postDeleteLessById',
        '/api/postCreateQues',
        '/api/getAllQA',
        '/api/postDeleteQuesById',
        '/api/PostUpdateQuestion'
    ];
    if (while_list.find((val) => val === req.originalUrl)) {
        next();
        return;
    }
    if (req?.headers?.authorization) {


        let token = req.headers.authorization.slice(7).split('.');

        if (token.length === 3) {
            let hash = createHmac('sha256', process.env.SIGNATURE).update(`${token[0]}.${token[1]}`).digest('hex');
            if (hash === token[2]) {
                let infor = JSON.parse(Buffer.from(token[1], 'base64').toString());
                if (infor.role === 'USER' && (admin_list.find((val) => val === req.originalUrl))) {
                    return res.status(401).json({
                        EC: 1,
                        EM: "You are not ADMIN"
                    })
                }
                if (infor.exp > Date.now()) {
                    req.body.idRefreshToken = infor.id;
                    next();
                    return;
                } else {
                    return res.status(200).json({
                        EC: 1,
                        EM: "Token is expired"
                    })
                }
            } else {
                return res.status(401).json({
                    EC: 1,
                    EM: "Token is incorrect"
                })
            }


        } else {
            return res.status(401).json({
                EC: 1,
                EM: "Token is incorrect"
            })
        }

    }
    return res.status(401).json({
        EC: 2,
        EM: "not yet login"
    })
}