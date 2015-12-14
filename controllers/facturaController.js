var factura = require('../schemas/factura');

exports.getfacturaSERVER = {
  handler: function(request, reply){
    var facturaS = factura.find({});
    reply(facturaS);
  }
}

exports.createfacturaSERVER = {
  handler: function(request, reply){

    var newfactura = new factura({

      ID : request.payload.factura_ID,
      nombre_Cliente : request.payload.factura_nombre_Cliente,
      Dia : request.payload.factura_Dia,
      Mes: request.payload.factura_Mes,
      Anio : request.payload.factura_Anio,
      zona : request.payload.factura_zona,
      ID_Vendedor: request.payload.factura_ID_Vendedor,
      total: request.payload.factura_total,
      tabla: request.payload.factura_tabla

    });
    newfactura.save();
    console.log('factura saved');
    return reply('ok');
  }
}