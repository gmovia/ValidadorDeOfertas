'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var router = express.Router();

//Configurando el modulo descargado connect.multiparty 
var multipart = require('connect-multiparty');
//Donde se va a guardar lo que se suba
var md_upload = multipart({uploadDir: './upload/products'})

//Rutas principales
router.post('/singIn', UserController.signIn)
router.post('/login', UserController.login)

module.exports = router;