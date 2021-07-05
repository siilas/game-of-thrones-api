const express = require('express');
const lordsController = require('../controller/lords-controller');
const housesController = require('../controller/houses-controller');

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => res.send("Game of Thrones API"));

router.get('/houses', housesController.getHouses);
router.post('/houses', housesController.createHouse);
router.get('/houses/:id', housesController.getHouseById);
router.delete('/houses/:id', housesController.deleteHouse);

router.get('/lords', lordsController.getLords);
router.post('/lords', lordsController.createLord);
router.get('/lords/:id', lordsController.getLordById);
router.delete('/lords/:id', lordsController.deleteLord);

module.exports = router;
