import express from 'express'
import { createLession } from '../controllers/CreateLesstion';

let router = express.Router();

let web = (app) => {
    router.post('/api/postCreateLession', createLession)
    router.get('/', (req, res) => {
        return res.send('test');
    })
    return app.use('/', router)
}

module.exports = { web };

