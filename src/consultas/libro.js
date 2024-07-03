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
        conexion.query(`SELECT * FROM ${tabla} WHERE id_libro=${id}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}

function agregar(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ?`, [data], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}
function actualizar(tabla, data){
    return new Promise((resolve, reject) => {
        conexion.query(`UPDATE ${tabla} SET ? WHERE id_libro =?`, [data, data.id_libro], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}

function eliminar(tabla, id_libro){
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM ${tabla} WHERE id_libro= ?`, [id_libro], (error, result) => {
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