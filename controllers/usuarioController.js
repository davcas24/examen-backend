var usuario = require('../schemas/usuario');
var SHA3 = require("crypto-js/sha3");
var boom = require("boom");

exports.getusuario = {
  handler: function(request, reply){
    var usuarios = usuario.find({});
    reply(usuarios);
  }
}

exports.createusuario = {
  handler: function(request, reply){
    console.log(request.payload+"llego al backend");
    var newusuario = new usuario({
      nombre : request.payload.nombre,
      password: SHA3(request.payload.password),
    });
    newusuario.save(function(err){
      if(err){
        return reply(boom.notAcceptable("Error" + err));
      }
      console.log('usuario saved');
      return reply('ok');
    });

  }
};
