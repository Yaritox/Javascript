//OBJECT LITERAL 
const producto9={
     nombre: "Apple watch",
     precio: 15000,
     disponible: true
}

//nos regresa el nombre de los atributos array 
console.log(Object.keys(producto9));

//nos regresa los valores en array 
console.log(Object.values(producto9));

//nos regresa los valores y nombre del atributo en array 
console.log(Object.entries(producto9));