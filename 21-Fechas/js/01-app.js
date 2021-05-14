let dia;

console.log("El día de hoy");
console.log(new Date());

console.log("Cualquier dia");
dia=new Date('March 26 1993');
console.log(dia);

console.log("obtener solo el año");
console.log(dia.getFullYear());

console.log("obtener solo el mes");
console.log(dia.getMonth());


//uso de la libreria de moment 
moment.locale('es');
console.log(moment().format('MMMM'));
console.log(moment().format('D'));
console.log(moment().format('YYYY'));
console.log(moment().format('HH:mm:ss'));