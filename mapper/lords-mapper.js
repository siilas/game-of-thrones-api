mapLord = (result) => {
    return {
        id: result["id"],
        name: result["name"],
        appearsOn: result["appears_on"]
    };
};

module.exports = {
    mapLord
};
