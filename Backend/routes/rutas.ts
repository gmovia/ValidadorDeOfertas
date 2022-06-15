//'use strict'

var express = require('express');
const jwt = require('jsonwebtoken') 

var authController = require('../controllers/authController');


var router = express.Router();
const verifyToken = (req, res, next) => {
    console.log("entro")
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(authHeader);
    if(token==null)
        return res.status(401).send("Token requerido");
    jwt.verify(token, process.env.JWT_SECRETO, (err, user)=>{
        if(err) return res.status(403).send("Token invalido");
        console.log(user);
        req.user = user;
        next();
    });
}

//Configurando el modulo descargado connect.multiparty 
var multipart = require('connect-multiparty');
//Donde se va a guardar lo que se suba
var md_upload = multipart({uploadDir: './upload/products'})

//Rutas para autcontroller
router.post('/register', authController.register)
router.post('/login', authController.login)



/*verifico si es un token valido*/ 
router.get('/productos',verifyToken, authController.showProducts)





module.exports = router;