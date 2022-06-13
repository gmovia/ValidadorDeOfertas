'use strict'

var express = require('express');

var authController = require('../controllers/authController');


var router = express.Router();

//Configurando el modulo descargado connect.multiparty 
var multipart = require('connect-multiparty');
//Donde se va a guardar lo que se suba
var md_upload = multipart({uploadDir: './upload/products'})

//Rutas para los metodos del controller
router.post('/register', authController.register)
router.post('/login', authController.login)


module.exports = router;