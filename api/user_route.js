'use strict';

let express = require('express');
let router = express.Router();
let userApi = require('./user_api');
debugger;
router.route('/iniciar_sesion').post(function(req , res){
    userApi.iniciar_sesion(req , res);
});

module.exports = router;