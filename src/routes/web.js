import express from 'express'
import { createLession } from '../controllers/CreateLesstion';
import { GetAllLession } from '../controllers/GetAllLession';
import { PostUpdateLessById } from '../controllers/PostUpdateLessById';
import { PostDeleteLessById } from '../controllers/PostDeleteLessById';
import { PostCreateQuestion } from '../controllers/PostCreateQuestion';
import { PostDeleteQuesById } from '../controllers/PostDeleteQuesById';
import { PostUpdateQuestion } from '../controllers/PostUpdateQestion';

import { GetAllQA } from '../controllers/GetAllQA';
import { GetAllQAByUser } from '../controllers/GetAllQAByUser';
import { PostCheckCorrAns } from '../controllers/PostCheckCorrAns';
import { GetIdLessMaxById } from '../controllers/GetIdLessMaxById';
import { GetFindCorrAns } from '../controllers/GetFindCorrAns';
import { PostRegisterUser } from '../controllers/PostRegisterUser';
import PostLoginUser from '../controllers/PostLoginUser';
import { GetRefreshLogin } from '../controllers/GetRefreshLogin';
import { middlewareAuth } from '../midleware/middlewareAuth';
import { PostSendEmail } from '../controllers/PostSendEmail';
import { PutUpdateVerify } from '../controllers/PutUpdateVerify';



let router = express.Router();

let web = (app) => {

    router.all('*', middlewareAuth)

    router.post('/api/postCreateLession', createLession);
    router.get('/api/getAllLession', GetAllLession);
    router.post('/api/postUpdateLessById', PostUpdateLessById);
    router.post('/api/postDeleteLessById', PostDeleteLessById);
    router.post('/api/postCreateQues', PostCreateQuestion);
    router.get('/api/getAllQA', GetAllQA);
    router.post('/api/postDeleteQuesById', PostDeleteQuesById);
    router.post('/api/PostUpdateQuestion', PostUpdateQuestion);
    router.get('/api/GetAllQAByUser', GetAllQAByUser);
    router.post('/api/PostCheckCorrAns', PostCheckCorrAns);
    router.get('/api/GetIdLessMaxById', GetIdLessMaxById);
    router.get('/api/GetFindCorrAns', GetFindCorrAns);
    router.post('/api/PostRegisterUser', PostRegisterUser);
    router.post('/api/PostLoginUser', PostLoginUser);
    router.get('/api/GetRefreshLogin', GetRefreshLogin);
    router.post('/api/PostSendEmail', PostSendEmail);
    router.put('/api/PutUpdateVerify', PutUpdateVerify);



    router.get('/', (req, res) => {
        return res.send('test');
    })
    return app.use('/', router)
}

module.exports = { web };

