// TODO: Improve mock functions to create more tests

getLordById = (id) => {
    throw new TypeError(`Lord with id ${id} not found`);
};

module.exports = {
    getLordById
};