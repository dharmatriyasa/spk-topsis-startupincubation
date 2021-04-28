const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'dss-schema',
    password: 'dinda0907'
});

module.exports = pool.promise();