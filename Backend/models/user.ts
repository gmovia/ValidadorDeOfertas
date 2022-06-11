'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema ({
    email: String,
    password: String,
    firstName: String,
    lastName: String,

    created_date: {type: Date, default: Date.now},
    
});

module.exports = mongoose.model('User', userSchema);

//mongo crea en la base users-->guarda con este nombre denbtro de la coleccion