import {obtenerClientesxId,editarCliente} from './API.js';
(function(){
     
     const formulario = document.querySelector("#formulario");
     
     formulario.addEventListener("submit",validarCliente);


     document.addEventListener("DOMContentLoaded", async ()=>{
          
          const parametrosURL= new URLSearchParams(window.location.search);
          const idCliente = parseInt(parametrosURL.get("id"));
          const {id,nombre,email,telefono,empresa}= await obtenerClientesxId(idCliente);


          document.querySelector("#nombre").value= nombre;
          document.querySelector("#email").value= email;
          document.querySelector("#telefono").value= telefono;
          document.querySelector("#empresa").value= empresa;
          document.querySelector("#id").value= id;


     });

     function validarCliente(evt){ 
          evt.preventDefault();

          

          const nombre=document.querySelector("#nombre").value;
          const email=document.querySelector("#email").value;
          const telefono=document.querySelector("#telefono").value;
          const empresa=document.querySelector("#empresa").value;
          const id=document.querySelector("#id").value;

          const cliente={
               nombre,
               email,
               telefono,
               empresa,
               id: parseInt(id)
          };



          if(validar(cliente)){
               imprimirAlerta("Todos los campos son requeridos","error");
               return;
          }

          editarCliente(cliente);

     }

     function validar(obj){
          return !Object.values(obj).every(inpput=>inpput!== '');
     }

})();