const producto2={
     nombre: "Macbook PRO",
     precio: 15000,
     disponible: true,

     informacion:{
          medidas:{
               peso: 10,
               largo: 15
          },
          fabricacion:{
               pais: "EUA"
          }

     }
}

const {informacion: {fabricacion:{pais}}}= producto2;

console.log(pais);