const pino = require('pino');

const isoTime = () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`;

const logger = pino({
    prettyPrint: { colorize: true },
    level: 'info',
    base: { service_name: 'game-of-thrones-api' },
    messageKey: 'message',
    formatters: { level: (label) => ({ level: label }) },
    timestamp: isoTime
});

module.exports = logger;
