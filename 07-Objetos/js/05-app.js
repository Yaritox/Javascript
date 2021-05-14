const producto={
     nombre: "Macbook",
     precio: 15000,
     disponible: true,

     informacion:{
          medidas:{
               peso: 10,
               largo: 13
          },
          fabricacion:{
               pais: "EUA"
          }

     }
}

console.table(producto);

console.table(producto.informacion.fabricacion);