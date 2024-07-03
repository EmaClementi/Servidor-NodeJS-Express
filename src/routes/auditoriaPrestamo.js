const express = require('express');

const respuesta = require('../red/respuestas.js');
const controlador = require('../controller/auditoriaPrestamo.js');

const router = express.Router();

router.get('/', todos);
router.get('/:id', uno);
router.post('/', agregar);
router.put('/', actualizar);
router.delete('/:id_auditoria', eliminar);

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
        const items = await controlador.actualizar(req.params.id_auditoria, req.body);
        respuesta.success(req, res, items,  200);
    } catch (error) {
        next(error);
    }
}

async function eliminar(req, res, next) {
    try {
        const items = await controlador.eliminar(req.params.id_auditoria);
        respuesta.success(req, res, items,  200);
    } catch (error) {
        next(error);
    }
}
module.exports = router;