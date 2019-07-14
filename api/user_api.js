'use strict';

let userModel = require('./usuario.model');

module.exports.iniciar_sesion = function(req, res){

    userModel.findOne({correo : req.body.correo}).then(function(user){
        console.log("user->", user);
        if(user){
            res.send(user);
        }else{
            console.log
            res.send(false); 
        }
    })

/*

    userModel.findOne({correo: correo}).then(function(user){
        console.log("user", user);
        debugger;
        if(user){
            if (user.contrasena == req.body.contrasena) {
                res.send(user);
            }
            else {
                res.send(false); 

            }
        }else{
            
            res.send('NO ENCONTRO EL EMAIL'); 
        }
    })*/
  
};
//  console.log( userModel);
    //  userModel.find().then(
    //     function(productos){
    //         res.send(productos);
    //     }
    // );