'use strict';

let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    correo: { type: String, required: true },
    contrasena: { type: String, required: true },
    nombre22q: { type: String, required: true },
    direccion : {type: String, required: true}
    segundo_apellido: { type: String, required: true },
    direccion2: {type: String, required: true}
    nombre: { type: String, required: true },
});

module.exports = mongoose.model('Usuario', userSchema, "usuarios");