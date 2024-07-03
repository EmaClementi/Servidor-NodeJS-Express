const express = require('express');

const respuesta = require('../red/respuestas.js');
const controlador = require('../controller/libro.js');

const router = express.Router();

router.get('/', todos);
router.get('/:id', uno);
router.post('/', agregar);
router.put('/', actualizar);
router.delete('/:id_libro', eliminar);

async function todos(req, res, next) {
    try {
        const items = await controlador.todos()
        respuesta.success(req, res, items, 200);
    } catch (error) {
        next(error);
    }


};

async function uno(req, res, next) {
    try {
        const items = await controlador.uno(req.params.id)
        respuesta.success(req, res, items, 200);
    } catch (error) {
        next(error);
    }
};

async function agregar(req, res, next) {
    try {
        const items = await controlador.agregar(req.body);
        respuesta.success(req, res, items, 201);
    } catch (error) {
        next(error);
    }
}

async function actualizar(req, res, next) {
    try {
        const items = await controlador.actualizar(req.params.id_libro, req.body);
        respuesta.success(req, res, items,  200);
    } catch (error) {
        next(error);
    }
}

async function eliminar(req, res, next) {
    try {
        const items = await controlador.eliminar(req.params.id_libro);
        respuesta.success(req, res, items,  200);
    } catch (error) {
        next(error);
    }
}
module.exports = router;