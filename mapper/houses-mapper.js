mapHouse = (result) => {
    return {
        id: result["id"],
        name: result["name"],
        region: result["region"],
        foundedIn: result["founded_in"], 
        currentLord: {
            id: result["current_lord"] || "",
            name: result["lord"] || "",
            appearsOn: result["appears_on"] || ""
        }
    };
}

module.exports = {
    mapHouse
};
