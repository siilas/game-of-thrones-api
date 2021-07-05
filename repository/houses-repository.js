const connection = require('../config/connection');
const { mapHouse } = require('../mapper/houses-mapper');

getHouseById = async (id) => {
    const sql = 'SELECT h.*, c.appears_on, c.name as lord FROM `houses` h LEFT JOIN `characters` c ON c.`id` = h.current_lord WHERE h.`id` = ?';

    return connection.promise().query(sql, [id])
        .then(res => {
            const rows = res[0];
            if (!rows.length) {
                throw new TypeError(`House with id ${id} not found`);
            }
            return mapHouse(rows.shift());
        });
};

getHouseByName = async (name) => {
    const sql = 'SELECT h.*, c.appears_on, c.name as lord FROM `houses` h LEFT JOIN `characters` c ON c.`id` = h.current_lord WHERE h.`name` LIKE ?';

    return connection.promise().query(sql, [`%${name}%`])
        .then(res => {
            const rows = res[0];
            if (!rows.length) {
                return [];
            }
            return rows.map(house => mapHouse(house));
        });
};

getHouses = async () => {
    // TODO: Add pagination?
    const sql = 'SELECT h.*, c.appears_on, c.name as lord FROM `houses` h LEFT JOIN `characters` c ON c.`id` = h.current_lord';

    return connection.promise().query(sql)
        .then(res => {
            const rows = res[0];
            if (!rows.length) {
                return [];
            }
            return rows.map(house => mapHouse(house));
        });
};

createHouse = async (house) => {
    const sql = 'INSERT INTO `houses`(name, region, founded_in, current_lord) VALUES (?, ?, ?, ?)';

    return connection.promise().query(sql, [house.name, house.region, house.foundedIn, house.currentLord.id])
        .then(res => {
            return {
                id: res.shift().insertId,
                ...house
            };
        });
};

deleteHouse = async (id) => {
    const sql = 'DELETE FROM `houses` h WHERE h.`id` = ?';

    return connection.promise().query(sql, [id]);
};

module.exports = {
    getHouseById,
    getHouseByName,
    getHouses,
    createHouse,
    deleteHouse
};
