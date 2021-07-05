// TODO: Improve mock functions to create more tests

getHouseById = (id) => {
    throw new TypeError(`House with id ${id} not found`);
};

module.exports = {
    getHouseById
};