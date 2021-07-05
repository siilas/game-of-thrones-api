const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql',
    port: 3306,
    database: 'game-of-thrones-db',
    user: 'game-of-thrones-user',
    password: 'game-of-thrones-pass'
});

module.exports = connection