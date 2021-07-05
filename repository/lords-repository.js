const connection = require('../config/connection');
const { mapLord } = require('../mapper/lords-mapper');

getLordById = async (id) => {
    const sql = 'SELECT c.* FROM `characters` c WHERE c.`id` = ?';

    return connection.promise().query(sql, [id])
        .then(res => {
            const rows = res[0];
            if (!rows.length) {
                throw new TypeError(`Lord with id ${id} not found`);
            }
            return mapLord(rows.shift());
        });
};

getLords = async () => {
    const sql = 'SELECT c.* FROM `characters` c';

    return connection.promise().query(sql)
        .then(res => {
            const rows = res[0];
            if (!rows.length) {
                return [];
            }
            return rows.map(lord => mapLord(lord));
        });
};

createLord = async (lord) => {
    const sql = 'INSERT INTO `characters` (name, appears_on) VALUES (?, ?)';

    return connection.promise().query(sql, [lord.name, lord.appearsOn])
        .then(res => {
            return {
                id: res.shift().insertId,
                ...lord
            };
        });
};

deleteLord = async (id) => {
    const sql = 'DELETE FROM `characters` c WHERE c.`id` = ?';

    return connection.promise().query(sql, [id]);
};

module.exports = {
    getLordById,
    getLords,
    createLord,
    deleteLord
};
