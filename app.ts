'use strict'

var express = require ('express');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

var bodyParser = require('body-parser');

//Ejecutar express (http)
var app = express();


//seteamos el motor de la plantilla
app.set('view engine', 'ejs')

//seteamos la carpeta public para archivos estaticos
app.use(express.static('./Backend/public'))

//para procesar datos enviados desde forms
app.use(express.urlencoded({extend:true}))
app.use(express.json())

//Cargar ficheros rutas
var products_routes = require('./Backend/routes/rutas');

//seteamos las variables de entorno
dotenv.config({path: './Backend/env/.env'})

//para poder trabajar con las cookies
//app.use(cookieParser)

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', products_routes);

module.exports = app;