var joi = require('joi');
var boom = require('boom');
var usuario = require('../schemas/usuario');
var SHA3 = require("crypto-js/sha3");

exports.login = {
    auth: false,
    validate: {
      payload: {
        nombre: joi.string().required(),
        password: joi.string().min(2).max(200).required()
      }
    },
    handler: function(request, reply) {
      var password = String(SHA3(request.payload.password));
      usuario.find({nombre: request.payload.nombre, password: password}, function(err, usuario){
          console.log(usuario);
          console.log(err)
          console.log("llego");
          if(!err){
            if(usuario.length > 0){
              request.auth.session.set(usuario[0]);
              return reply({nombre: usuario[0].nombre, scope: usuario[0].scope});
            }
            return reply(boom.unauthorized('Contraseña o usuario invalido(s)'));
          }
          return reply(boom.notAcceptable('Error Executing Query'));
      });
    }
};

exports.logout = {
    auth: {
      mode:'required',
      strategy:'session'
    },
    handler: function(request, reply) {
      request.auth.session.clear();
      return reply('Logout Exitoso');
    }
  };
