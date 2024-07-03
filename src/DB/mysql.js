const mysql = require('mysql2');
const config = require('../config');

const conexion = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});



conexion.on('connection', (connection) => {
    console.log('DB Conectada!');
});

conexion.on('error', (err) => {
    console.error('[DB error]', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('La conexión con la base de datos se ha perdido');
    } else {
        throw err;
    }
});

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        conexion.query(sql, values, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

module.exports = {
    conexion,
    query
}