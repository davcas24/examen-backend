var mongoose = require('mongoose');

var facturaSchema = new mongoose.Schema({
	ID : Number,
	nombre_Cliente : String,
	Dia : String,
  	Mes : String,
  	Anio : String,
  	zona : String,
  	ID_Vendedor : String,
  	total : Number,
  	tabla : []
});

module.exports = mongoose.model('factura', facturaSchema);
