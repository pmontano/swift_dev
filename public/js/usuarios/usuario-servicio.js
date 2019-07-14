'use strict';

async function iniciar_sesion(pcorreo, pcontrasenna) {

    console.log("hola mundo" + pcorreo);
    let producto = {};

    let datos = {
        correo: pcorreo
    }
    debugger;
    await fetch('/api/iniciar_sesion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(function (response) {
            if (response.status != 200)
                console.log('Error en el servicio: ' + response.status);
            else
                return response.json();
        })
        .then(function (response) {
            producto = response;
            console.log(producto);
        })
        .catch(err => console.log('Error:', err));
        
        console.log(producto);
    return producto;

};