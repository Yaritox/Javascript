const producto6={
     nombre: "Apple watch",
     precio: 15000,
     disponible: true
}
const medidas={
     peso: 10,
     largo: 15
}

const resultado=Object.assign(producto6,medidas);

console.log("unir objetos");
console.table(resultado);

const resultado2={...producto6, ...medidas};
console.table(resultado2);