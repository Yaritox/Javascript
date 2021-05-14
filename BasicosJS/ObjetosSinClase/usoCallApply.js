let persona = {
    nombre: 'Jordi',
    apellido: 'Cruz',
    email: 'jordi.crume@mail.com',
    edad: 28,
    idioma: 'es',
    
     nombreCompleto:function(titulo){
        return titulo+' '+this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Kevin',
    apellido: 'Meza',
    email: 'meza@mail.com'
}
// EL METODO CALL NOS PERMITE USAR MÉTODOS DE OTROS OBJT EN UN OBJE CON = ATRIBUTOS EN USO  
console.log(persona.nombreCompleto('M.I.'));
// El pasar parametros es desp. del objt 
console.log(persona.nombreCompleto.call(persona2,'Lic.'));

//USANDO APPLY lo mismo pero para pasar parametros se usa un arreglo 
let arreglo=["Lic."];
console.log(persona.nombreCompleto.apply(persona2,arreglo));