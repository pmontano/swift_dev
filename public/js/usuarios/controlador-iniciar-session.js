'use strict';

function obtenerDatos(){
    console.log('obtenerDatos()');

var correo = document.getElementById('correo').value;
var contrasena = document.getElementById('contraseNa').value;


iniciar_sesion(correo, contrasena);
}