'use strict'


var mongoose = require('mongoose');
const { listen } = require('./app');
var app = require('./app');
var port = 3000;
/*con mongo bdb*/
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Conexión a la base de datos correcta!!!');
    
    //Crear servidor y ponerme a escuchar peticiones HTTP

    app.listen(port, ()=>{
        console.log('Servidor corriendo en http://localhost:'+port);
    });


});


/*sin mongo db
app.listen(port, ()=>{
    console.log('Servidor corriendo en http://localhost:'+port);}) */