'use strict'
//Importaciones
var validator = require('validator');
//Usamos las librerias para borrar y la libreria path de node
var fs = require('fs');
var path = require('path');
var User = require('../models/user');
const user = require('../models/user');

const { exists } = require('../models/user');
var controllers = {

    nada: (req: any, res: any) => {
        return res.status(200).send({
         message: "soy la accion save"});

    },
    save: (req:any, res:any) => {
       

        //Recoger parametros por post
        var params = req.body;

    
        


        //Validar datos(validator) ver las validaciones en internet
        try {
            var validate_email = !validator.isEmpty(params.email);
            var validate_password = !validator.isEmpty(params.password);
            var validate_firstName = !validator.isEmpty(params.firstName);
            var validate_lastName = !validator.isEmpty(params.lastName);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar !!!'
            });

        }

        if (validate_email && validate_password && validate_firstName && validate_lastName ) {
            //Crear el objeto a guardar
            var user = new User();

            //Asignar valores
            user.email = params.email;
            user.password = params.password;
            user.firstName = params.firstName;
            user.last_Name = params.lastName


            //Guardar el articulo
            user.save((err:any, userStored:any) => {

                if (err || !userStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El usuario no se ha guardado !!!'

                    });
                }

                return res.status(200).send({
                    status: 'success',
                    artcle: userStored
                });





            });

        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son enviados !!!'
            });

        }


    },

}
module.exports = controllers;