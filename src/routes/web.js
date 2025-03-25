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
import { PutChangePass } from '../controllers/PutChangePass';
import { GetAllLessionTeach } from '../controllers/Teacher/GetAllLessionTeach';
import { GetHisUser } from '../controllers/GetHisUser';
import { PutChangeInforUser } from '../controllers/PutChangeInforUser';
import { Get5His } from '../controllers/Get5His';
import { DelHisUser } from '../controllers/DelHisUser';
import { Get5UserAccount, GetAllUserAccount } from '../controllers/superior/GetUserAccount';
import { DeleteUserAccount } from '../controllers/superior/DeleteUserAccount';
import { PutUpUserToTeach } from '../controllers/superior/PutUpUserToTeach';
import { Get5AdminAccount, GetAllAdminAccount } from '../controllers/superior/GetAdminAccount';
import { PostComment } from '../controllers/PostComment';
import { Get5Comment, GetAllComment } from '../controllers/superior/GetComment';
import DelComment from '../controllers/superior/DelComment';



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
    router.put('/api/PutChangePass', PutChangePass);
    router.get('/api/GetAllLessionTeach', GetAllLessionTeach);
    router.get('/api/GetHisUser', GetHisUser);
    router.get('/api/Get5His', Get5His);
    router.put('/api/PutChangeInforUser', PutChangeInforUser);
    router.delete('/api/DelHisUser', DelHisUser);
    router.post('/api/PostComment', PostComment);


    //supertior
    router.get('/api/get5AccountUser', Get5UserAccount);
    router.get('/api/getAllAccountUser', GetAllUserAccount);
    router.delete('/api/DeleteUserAccount', DeleteUserAccount);
    router.put('/api/PutUpUserToTeach', PutUpUserToTeach);
    router.get('/api/Get5AdminAccount', Get5AdminAccount);
    router.get('/api/GetAllAdminAccount', GetAllAdminAccount);
    router.get('/api/GetAllComment', GetAllComment);
    router.get('/api/Get5Comment', Get5Comment);
    router.delete('/api/DelComment', DelComment);




    router.get('/', (req, res) => {
        return res.send('test');
    })
    return app.use('/', router)
}

module.exports = { web };

