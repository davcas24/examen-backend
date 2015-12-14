var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var usuarioSchema = new mongoose.Schema({
  nombre : {type: String, unique: true, required: true},
  password : String,

});

usuarioSchema.plugin(uniqueValidator);
module.exports = mongoose.model('usuario', usuarioSchema);
