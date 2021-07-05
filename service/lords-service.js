const repository = require('../repository/lords-repository');

getLords = async () => {
    return repository.getLords();
};

getLordById = async (id) => {
    return repository.getLordById(id);
};

createLord = async (lord) => {
    // TODO: Add express validator?
    if (!lord.name || lord.name.length == 0) {
        throw new TypeError('Field name is required.');
    }
    if (!lord.appearsOn || lord.appearsOn.length == 0) {
        throw new TypeError('Field appearsOn is required.');
    }
    return repository.createLord(lord);
}

deleteLord = async (id) => {
    const lord = await repository.getLordById(id);
    repository.deleteLord(lord.id);
}

module.exports = {
    getLords,
    getLordById,
    createLord,
    deleteLord
};
