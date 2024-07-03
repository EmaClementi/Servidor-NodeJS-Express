const db = require('../consultas/libro');
const tabla = 'libro';

function todos(){
    return db.todos(tabla)
}

function uno(id){
    return db.uno(tabla, id);
}

function agregar(body){
    return db.agregar(tabla, body)
}

function actualizar(id, body){
    return db.actualizar(tabla, body, id);
}
function eliminar(id){
    return db.eliminar(tabla, id);
}

module.exports = {
    todos,
    uno,
    agregar,
    actualizar,
    eliminar
}