const dotenv = require('dotenv-extended');
dotenv.load();
const express = require('express');
const app = express();
const loginRouter = require('./routers/loginRouter');
const cardRouter = require('./routers/cardRouter');
const logger = require('./logger');
const handleErrors = require('./utils/handleErrors');
const moment = require('moment');
moment.locale('pt-br');

const log = (req, res, next) => {
    if (req.url) {
        let operation;

        switch (req.method) {
            case 'GET':
                operation = '- Get';
                break;
            case 'POST':
                if (req.url.includes('/login')) operation = '- Login';
                else operation = '- Add';
                break;
            case 'PUT':
                operation = '- Update';
                break;
            case 'DELETE':
                operation = '- Delete';
                break;
        }

        const date = moment().format('DD/MM/YYYY kk:mm:ss')
        logger.info(`${date} ${operation || ''}`)
    }
    
    next();
};

if (process.env.ENV_STAGE !== 'test') {
    app.use(log);
}

app.use(express.json());
app.use(loginRouter);
app.use(cardRouter);
app.use(handleErrors);

module.exports = app;
