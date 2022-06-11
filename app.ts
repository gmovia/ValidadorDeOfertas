'use strict'

var express = require ('express');
var bodyParser = require('body-parser');

//Ejecutar express (http)
var app = express();

//Cargar ficheros rutas
var products_routes = require('./Backend/routes/rutas');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', products_routes);

module.exports = app;