const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const usuarios = require('./routes/usuario');
const libros = require('./routes/libro');
const prestamos = require('./routes/prestamo');
const bibliotecarios = require('./routes/bibliotecario');
const auditoriaPrestamo = require('./routes/auditoriaPrestamo');

const errores = require('./red/errors');

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configuracion
app.set('port', config.app.port);

//Rutas
app.use('/api/usuarios', usuarios);
app.use('/api/libros', libros);
app.use('/api/prestamos', prestamos);
app.use('/api/bibliotecarios', bibliotecarios);
app.use('/api/auditorias', auditoriaPrestamo);
app.use(errores);

module.exports = app; 