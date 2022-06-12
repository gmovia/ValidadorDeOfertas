'use strict'
//Importaciones
var validator = require('validator');
//Usamos las librerias para borrar y la libreria path de node
var fs = require('fs');
var path = require('path');

import {SingIn} from '../../src/credentials/singIn'
import {Login} from '../../src/credentials/login'


var controllers = {

    login: (req: any, res: any) => {

        var params = req.body
        const credentials = new Login;
        
        try {
            var validate_email = !validator.isEmpty(params.email);
            var validate_password = !validator.isEmpty(params.password);
            
        } catch (err) {
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos por enviar !!!'
            });

        }

        if (validate_email && validate_password  ) {
            credentials.check(params.email, params.password)
        }

          return res.status(200).send({
                    status: 'success'
                    
                });



          

    },

    signIn: (req: any, res: any) => {

        var params = req.body
        const credentials = new SingIn;
        
        try {
            var validate_email = !validator.isEmpty(params.email);
            var validate_password = !validator.isEmpty(params.password);
            var validate_firstName = !validator.isEmpty(params.firstName);
            var validate_lastName = !validator.isEmpty(params.lastName);
        } catch (err) {
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos por enviar !!!'
            });

        }

        if (validate_email && validate_password && validate_firstName && validate_lastName ) {
            //Crear el objeto a guardar
            

            //Asignar valores
           
            credentials.save(params.email, params.password, params.firstName, params.lastName)
        }

        return res.status(200).send({
            status: 'success'
            
        });

          

    },



}
module.exports = controllers;