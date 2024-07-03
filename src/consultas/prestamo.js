const conexion = require('../DB/mysql');

function todos(tabla) {
    return new Promise ((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })

    });
}

function uno(tabla, id) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE id_prestamo=${id}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}

function agregar(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ?`, data, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}
function actualizar(tabla, data){
    return new Promise((resolve, reject) => {
        conexion.query(`UPDATE ${tabla} SET ? WHERE id_prestamo = ?`, [data, data.id_prestamo], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}

function eliminar(tabla, id_prestamo){
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM ${tabla} WHERE id_prestamo= ?`, [id_prestamo], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}

module.exports = {
    todos,
    uno,
    agregar,
    actualizar,
    eliminar
}