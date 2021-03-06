const app = require('./server');
const logger = require('./logger');

const port = process.env.PORT || 5000;

app.listen(port, () => {
    logger.info(`
        ################################################
            Server listening on port: ${port}
        ################################################
    `);
});
