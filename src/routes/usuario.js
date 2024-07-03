const express = require('express');

const respuesta = require('../red/respuestas.js');
const controlador = require('../controller/usuario.js');

const router = express.Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', addUsuario);
router.put('/', updateUsuario);
router.delete('/', deleteUsuario);

async function getUsuarios(req, res, next) {
    try {
        const items = await controlador.obtenerTodos()
        respuesta.success(req, res, items, 200);
    } catch (error) {
        next(error);
    }


};

async function getUsuario(req, res, next) {
    try {
        const items = await controlador.obtenerUno(req.params.id)
        respuesta.success(req, res, items, 200);
    } catch (error) {
        next(error);
    }
};

async function addUsuario(req, res, next) {
    try {
        const items = await controlador.agregarUsuario(req.body);
        respuesta.success(req, res, items, 201);
    } catch (error) {
        next(error);
    }
}

async function updateUsuario(req, res, next) {
    try {
        const items = await controlador.actualizarUsuario(req.body);
        respuesta.success(req, res, items, 200);
    } catch (error) {
        next(error); // Asegúrate de manejar errores correctamente
    }
}

async function deleteUsuario(req, res, next) {
    try {
        const items = await controlador.eliminarUsuario(req.body);
        respuesta.success(req, res, 'items',  200);
    } catch (error) {
        next(error);
    }
}
module.exports = router;