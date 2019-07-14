var express = require('express');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://leerPlusUser:Fgo96t34RUHxmCaH@cluster0-qswzu.mongodb.net/LeePlusDB?retryWrites=true&w=majority'
,{useNewUrlParser: true});


app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Se importan las rutas dentro del index.js
const usuarios = require('./api/user_route');

// Le indicamos que le de acceso externo a las rutas inicializadas
app.use('/api', usuarios);

app.listen(8080, function() {
  console.log('Servidor corriendo en puerto 8080...')
});


// Se guarda todo lo que se ha realizado
module.exports = app;