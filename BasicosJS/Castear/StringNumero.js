let miNumero="18";
console.log(miNumero);
console.log(typeof miNumero);
let edad = Number(miNumero);

//isNan te devuelve si NO es un número
if(!isNaN(edad)){
     
     let voto=edad>=18?"Puede votar":"NO puede votar";
     console.log(voto);
}else 
     console.log("Debe ingresar un número");

