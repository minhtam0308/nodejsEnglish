import express from 'express'
import { createLession } from '../controllers/CreateLesstion';
import { GetAllLession } from '../controllers/GetAllLession';
import { PostUpdateLessById } from '../controllers/PostUpdateLessById';
; import { PostDeleteLessById } from '../controllers/PostDeleteLessById';
import { PostCreateQuestion } from '../controllers/PostCreateQuestion';
import { GetAllQA } from '../controllers/GetAllQA';

let router = express.Router();

let web = (app) => {
    router.post('/api/postCreateLession', createLession);
    router.get('/api/getAllLession', GetAllLession);
    router.post('/api/postUpdateLessById', PostUpdateLessById);
    router.post('/api/postDeleteLessById', PostDeleteLessById);
    router.post('/api/postCreateQues', PostCreateQuestion);
    router.get('/api/getAllQA', GetAllQA);
    router.get('/', (req, res) => {
        return res.send('test');
    })
    return app.use('/', router)
}

module.exports = { web };

