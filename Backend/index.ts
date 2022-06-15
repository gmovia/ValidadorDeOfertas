'use strict'



const { listen } = require('./app');
var app = require('./app');
var port = 3000;

app.listen(port, ()=>{
    console.log('Servidor corriendo en http://localhost:'+port);}) 