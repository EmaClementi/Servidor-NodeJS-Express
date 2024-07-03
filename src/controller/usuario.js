const db = require('../consultas/usuario');
const tabla = 'usuario';

function obtenerTodos(){
    return db.todos(tabla)
}

function obtenerUno(id){
    return db.uno(tabla, id);
}

function agregarUsuario(body){
    return db.agregar(tabla, body)
}

function actualizarUsuario(body){
    return db.actualizar(tabla, body);
}
function eliminarUsuario(body){
    return db.eliminar(tabla, body);
}

module.exports = {
    obtenerTodos,
    obtenerUno,
    agregarUsuario,
    actualizarUsuario,
    eliminarUsuario
}