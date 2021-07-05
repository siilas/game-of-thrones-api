const logger = require('../config/logger');
const service = require('../service/houses-service');

getHouses = async (req, res) => {
    const name = req.query.name;
    try {
        let houses;
        if (name !== undefined) {
            houses = await service.getHouseByName(name);
        } else {
            houses = await service.getHouses();
        }
        return res
            .status(200)
            .set('Content-Type', 'application/json')
            .json(houses);
    } catch (error) {
        logger.error(`Error getting houses: ${error}`);
        return res
            .status(500)
            .set('Content-Type', 'application/json')
            .json(`Error getting houses`);
    }
};

getHouseById = async (req, res) => {
    const id = req.params.id;
    try {
        const house = await service.getHouseById(id);
        return res
            .status(200)
            .set('Content-Type', 'application/json')
            .json(house);
    } catch (error) {
        logger.error(`Error getting house by id: ${error}`);
        let code;
        let message;
        if (error instanceof TypeError) {
            code = 404;
            message = error.message;
        } else {
            code = 500;
            message = `Error getting house: ${id}`;
        }
        return res
            .status(code)
            .set('Content-Type', 'application/json')
            .json(message);
    }
};

createHouse = async (req, res) => {
    const request = req.body;
    try {
        const house = await service.createHouse(request);
        return res
            .status(201)
            .set('Content-Type', 'application/json')
            .json(house);
    } catch (error) {
        logger.error(`Error creating house: ${error}`);
        let code;
        let message;
        if (error instanceof TypeError) {
            code = 400;
            message = error.message;
        } else {
            code = 500;
            message = `Error creating house: ${JSON.stringify(request)}`;
        }
        return res
            .status(code)
            .set('Content-Type', 'application/json')
            .json(message);
    }
};

deleteHouse = async (req, res) => {
    const id = req.params.id;
    try {
        await service.deleteHouse(id);
        return res
            .status(204)
            .send();
    } catch (error) {
        logger.error(`Error deleting house: ${error}`);
        let code;
        let message;
        if (error instanceof TypeError) {
            code = 400;
            message = error.message;
        } else {
            code = 500;
            message = `Error deleting house: ${id}`;
        }
        return res
            .status(code)
            .set('Content-Type', 'application/json')
            .json(message);
    }
};

module.exports = {
    getHouses,
    getHouseById,
    createHouse,
    deleteHouse
};
