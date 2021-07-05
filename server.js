const app = require('./config/express')();
const logger = require('./config/logger')
const port = app.get('port');

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});
