var inventario = require('../schemas/inventario');

exports.getinventarioSERVER = {
  handler: function(request, reply){
    var inventarioS = inventario.find({});
    reply(inventarioS);
  }
}

exports.createinventarioSERVER = {
  handler: function(request, reply){

    var newinventario = new inventario({

      ID : request.payload.inventario_ID,
      Descripcion : request.payload.inventario_Descripcion,
      Num_Original: request.payload.inventario_Num_Original,
      Cantidad : request.payload.inventario_Cantidad,
      Precio : request.payload.inventario_Precio

    });
    newinventario.save();
    console.log('inventario saved');
    return reply('ok');
  }
}

exports.modificarinventarioSERVER = {
  handler: function(request, reply){
    inventario.findOneAndUpdate(
      {ID : request.payload.ID},
        {Descripcion : request.payload.Descripcion,
        Num_Original: request.payload.Num_Original,
        Cantidad : request.payload.Cantidad,
        Precio : request.payload.Precio},
        function(err, inventariotodos){
      inventariotodos.save(function(err){
        if(err){
          alert("Shit");
        }
      });
    });
  }
}

exports.borrarinventarioSERVER = {
  handler: function(request, reply){
    inventario.findOneAndRemove(
      {ID : request.params.ID}, function(err){
        if(err)
          alert("Shit");
      }
    );
  }
}