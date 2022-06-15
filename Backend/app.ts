import express from 'express';
//var express = require ('express')
//const dotenv = require('dotenv')
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
//const cookieParser = require('cookie-parser')

import bodyParser from 'body-parser';
//var bodyParser = require('body-parser');

//Ejecutar express (http)
var app = express();


//seteamos el motor de la plantilla
app.set('view engine', 'ejs')

//seteamos la carpeta public para archivos estaticos
app.use(express.static('./public'))

//para procesar datos enviados desde forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

//Cargar ficheros rutas
var products_routes = require('./routes/rutas');

//seteamos las variables de entorno
dotenv.config({path: './env/.env'})

//para poder trabajar con las cookies
//app.use(cookieParser)

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', products_routes);

module.exports = app;