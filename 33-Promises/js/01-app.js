const paises=["roma", "china", "mexico","italia"];


function nuevoPais(pais,callback){
     setTimeout(()=>{
          paises.push(pais);
          callback();
     },2000);
}


function mostrarPaises(){
     setTimeout(()=>{
          paises.forEach(pais=>console.log(pais));
     },1000);
}

//mostrarPaises();

//nuevoPais("inglaterra",mostrarPaises);


console.log("Promesas");

const aplicarDescuento =new Promise((resuelto, error)=>{
     const descuento=false;
     if(descuento){
          resuelto("Descuento aplicado");
     }else{
          error("hubo un error");
     }
});

//fullfiled se cumplio 
//rejected no se cumplio 
//pending no sabe si se va a cumplir o no 
console.log(aplicarDescuento);

aplicarDescuento.then(resultado=>{
     console.log(resultado);
}).catch(resultado=>{
     console.log(resultado);
});

const canciones=[];

const nuevaCancion= cancion => new Promise(resulto=>{
     setTimeout(()=>{
          canciones.push(cancion);
          resulto(`Se agrego ${cancion} `);
     },4000);
});

nuevaCancion("Someone like you").then(resultado=>{
     console.log(resultado); 
     console.log(canciones);
     return nuevaCancion("dont you remember");
}).then(resultado=>{
     console.log(resultado); 
     console.log(canciones);
     return nuevaCancion("make me feel your love");
}).then(resultado=>{
     console.log(resultado); 
     console.log(canciones);
});
