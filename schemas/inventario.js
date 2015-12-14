var mongoose = require('mongoose');

var inventarioSchema = new mongoose.Schema({
  ID : String,
  Descripcion : String,
  Num_Original : String,
  Cantidad : Number,
  Precio : Number
});

module.exports = mongoose.model('inventario', inventarioSchema);
