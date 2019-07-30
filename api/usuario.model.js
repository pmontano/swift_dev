'use strict';

let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    correo: { type: String, required: true },
    contrasena: { type: String, required: true }
});

module.exports = mongoose.model('Usuario', userSchema, "usuarios");