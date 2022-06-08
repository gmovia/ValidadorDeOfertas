'use strict'
//Importaciones
var validator = require('validator');
//Usamos las librerias para borrar y la libreria path de node
var fs = require('fs');
var path = require('path');
//var Products = require('../models/products');
//const article = require('../models/products');

//const { exists } = require('../models/products');
var controller = {

    datoCurso: (req:any, res:any) => {
       

        return res.status(200).send({
            

            curso: 'Tecnicas de diseño',
           
          
        });

    },
};

module.exports = controller;