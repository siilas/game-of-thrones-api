const logger = require('../config/logger');
const service = require('../service/lords-service');

getLords = async (req, res) => {
    try {
        const lords = await service.getLords();
        return res
            .status(200)
            .set('Content-Type', 'application/json')
            .json(lords);
    } catch (error) {
        logger.error(`Error getting lords: ${error}`);
        return res
            .status(500)
            .set('Content-Type', 'application/json')
            .json(`Error getting lords`);
    }
};

getLordById = async (req, res) => {
    const id = req.params.id;
    try {
        const lord = await service.getLordById(id);
        return res
            .status(200)
            .set('Content-Type', 'application/json')
            .json(lord);
    } catch (error) {
        logger.error(`Error getting lord by id: ${error}`);
        let code;
        let message;
        if (error instanceof TypeError) {
            code = 404;
            message = error.message;
        } else {
            code = 500;
            message = `Error getting lord: ${id}`;
        }
        return res
            .status(code)
            .set('Content-Type', 'application/json')
            .json(message);
    }
};

createLord = async (req, res) => {
    const request = req.body;
    try {
        const lord = await service.createLord(request);
        return res
            .status(201)
            .set('Content-Type', 'application/json')
            .json(lord);
    } catch (error) {
        logger.error(`Error creating lord: ${error}`);
        let code;
        let message;
        if (error instanceof TypeError) {
            code = 400;
            message = error.message;
        } else {
            code = 500;
            message = `Error creating lord: ${JSON.stringify(request)}`;
        }
        return res
            .status(code)
            .set('Content-Type', 'application/json')
            .json(message);
    }
};

deleteLord = async (req, res) => {
    const id = req.params.id;
    try {
        await service.deleteLord(id);
        return res
            .status(204)
            .send();
    } catch (error) {
        logger.error(`Error deleting lord: ${error}`);
        let code;
        let message;
        if (error instanceof TypeError) {
            code = 400;
            message = error.message;
        } else {
            code = 500;
            message = `Error deleting lord: ${id}`;
        }
        return res
            .status(code)
            .set('Content-Type', 'application/json')
            .json(message);
    }
};

module.exports = {
    getLords,
    getLordById,
    createLord,
    deleteLord
};
