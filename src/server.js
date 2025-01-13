import express from 'express';
import bodyParser from 'body-parser';
import { web } from './routes/web'
const { ConnectDB } = require('./config/connectDB');

require('dotenv').config()

let app = express();

//display data when post (req.body)
app.use(bodyParser.json({ limit: '3mb' }))
app.use(bodyParser.urlencoded({ extended: true }))

// CORS error
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
})

web(app)

//test connect db
ConnectDB()

let port = process.env.PORT;

app.listen(port, () => {
    console.log('app running on port ', port)
})