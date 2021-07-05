const express = require('express');
const config = require('config');
const routes = require('./route');

module.exports = () => {
    const app = express();

    app.set('port', process.env.PORT || 8080);

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/', routes);

    return app;
};
