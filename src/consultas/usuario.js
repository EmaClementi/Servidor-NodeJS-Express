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
        conexion.query(`SELECT * FROM ${tabla} WHERE id_usuario=${id}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}

function agregar(tabla, data) {
    return new Promise((resolve, reject) => {
        const {id_usuario, nombre, apellido, direccion, telefono} = data;
        const usuario = {id_usuario, nombre, apellido, direccion, telefono}
        conexion.query(`INSERT INTO ${tabla} SET ?`, [usuario], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}
function actualizar(tabla, data) {
    return new Promise((resolve, reject) => {
        const query = `UPDATE ${tabla} SET ? WHERE id_usuario = ?`;
        conexion.query(query, [data, data.id_usuario], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

function eliminar(tabla, data){
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM ${tabla} WHERE id_usuario = ?`, data.id_usuario, (error, result) => {
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