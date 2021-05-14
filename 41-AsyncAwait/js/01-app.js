/*
console.log(2+2);
try{
     hola();
}catch(error){
     console.log(error);
}
console.log(1+1);

function descargarClientes(){

     return new Promise((resuelto, rechazado)=>{
          const error = false;

          setTimeout(()=>{
               if(!error){
                    resuelto("todo correcto");
               }else{
                    rechazado("todo mal");
               }

          },1000);
     });
}

async function ejecutar(){
     try{
          const respuesta = await descargarClientes();
          console.log(3+5);
          console.log(respuesta);
     }catch(error){
          console.log(error);
     }
}

const ejecutar2= async ()=>{
     try{
          const respuesta = await descargarClientes();
          console.log(3+5);
          console.log(respuesta);
     }catch(error){
          console.log(error);
     }
}

ejecutar();

function descargarNuevosClientes(){
     return new Promise((resuelto, rechazado)=>{
          const error = false;
          console.log("Espera descargando clientes... ");
          setTimeout(()=>{
               if(!error){
                    resuelto("todo correcto clientes");
               }else{
                    rechazado("todo mal clientes");
               }

          },5000);
     });

}

function descargarNuevosPedidos(){
     return new Promise((resuelto, rechazado)=>{
          const error = false;
          console.log("Espera descargando pedidos... ");
          setTimeout(()=>{
               if(!error){
                    resuelto("todo correcto pedidos");
               }else{
                    rechazado("todo mal pedidos");
               }

          },3000);
     });

}
console.log("App2");
const app2 = async ()=>{
     try{
          const respuesta=await Promise.all([descargarNuevosClientes(),descargarNuevosPedidos()]);

          console.log(respuesta);

     }catch(error){
          console.log(error);
     }   

}
app2();

console.log("App");
const app = async ()=>{
     try{
          const clientes = await descargarNuevosClientes();
          console.log(clientes);
          const pedidos = await descargarNuevosPedidos();
          console.log(pedidos);
     }catch(error){
          console.log(error);
     }   

}
app();
*/


document.addEventListener("DOMContentLoaded",cargarAwait);
//document.addEventListener("DOMContentLoaded",cargarJsonApi);


function cargarJsonApi(){
     fetch('https://picsum.photos/list')
     .then(resultado=> resultado.json())
     .then(datos=> console.log(datos))
     .catch(error=>console.log(error));

}

async function cargarAwait(){
     try{
          const respuesta = await fetch('https://picsum.photos/list');
          const resultado = await respuesta.json();
          console.log(resultado);
     }catch(error){
          console.log("error");
     }
}