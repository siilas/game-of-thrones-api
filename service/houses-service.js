const housesRepository = require('../repository/houses-repository');
const lordsRepository = require('../repository/lords-repository');

getHouses = async () => {
    return housesRepository.getHouses();
};

getHouseByName = async (name) => {
    return housesRepository.getHouseByName(name);
};

getHouseById = async (id) => {
    return housesRepository.getHouseById(id);
};

createHouse = async (house) => {
    // TODO: Add express validator?
    if (!house.name || house.name.length == 0) {
        throw new TypeError(`Field name is required.`);
    }
    if (!house.region || house.region.length == 0) {
        throw new TypeError(`Field region is required.`);
    }
    if (!house.foundedIn || house.foundedIn.length == 0) {
        throw new TypeError(`Field foundedIn is required.`);
    }
    if (!house.currentLord || !house.currentLord.id || !await lordsRepository.getLordById(house.currentLord.id)) {
        throw new TypeError(`Field currentLord.id is required.`);
    }
    return housesRepository.createHouse(house);
};

deleteHouse = async (id) => {
    const house = await housesRepository.getHouseById(id);
    housesRepository.deleteHouse(house.id);
};

module.exports = {
    getHouses,
    getHouseById,
    getHouseByName,
    createHouse,
    deleteHouse
};
