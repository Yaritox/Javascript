//Formas de declarar arreglos 

//let autos=new Array('bmw','volvo');
let autos=['bmw','volvo','mercede benz'];
console.log(autos);

//para recorrer
console.log(autos[0]);
console.log(autos[2]);


for(let i=0;i<autos.length;i++){

     console.log(i+" : "+autos[i]);
}

//AGREGAR ARRAY AL FINAL 
autos.push('audi');

//EDITAR ARRAY 
autos[1]="volkswagen";
console.log(autos[1]);

console.log(autos);

//como saber si es un ARRAY 

console.log(typeof autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);