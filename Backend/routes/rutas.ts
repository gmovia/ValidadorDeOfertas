//'use strict'

var express = require('express');


var authController = require('../controllers/authController');
var productController = require ('../controllers/productsController');


var router = express.Router();

//Configurando el modulo descargado connect.multiparty 
var multipart = require('connect-multiparty');
//Donde se va a guardar lo que se suba
var md_upload = multipart({uploadDir: './upload/products'})

//Rutas para autcontroller
router.post('/register', authController.register)
router.post('/login', authController.login)





/*calcular ofertas */
router.post('/sendCart/:user',productController.verifyToken, productController.sendCart)


module.exports = router;