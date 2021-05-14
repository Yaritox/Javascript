(function(){
     let DB;
     const formulario=document.querySelector("#formulario");
     document.addEventListener("DOMContentLoaded",()=>{
          conectarDB();
          formulario.addEventListener("submit",validarCliente);
     });

     function conectarDB(){
          const abrirConexion=window.indexedDB.open("crm");

          abrirConexion.onerror=()=>{
               console.log("hubo un error");
          };

          abrirConexion.onsuccess=()=>{
               DB=abrirConexion.result;
          }
     }

     function validarCliente(evt){
          evt.preventDefault();
          const nombre=document.querySelector("#nombre").value;
          const email=document.querySelector("#email").value;
          const telefono=document.querySelector("#telefono").value;
          const empresa=document.querySelector("#empresa").value;

          if(nombre==='' || email==='' || telefono==='' || empresa===''){
               imprimirAlerta("Todos los campos son obligatorios","error");
               return;
          }

          const cliente={
               nombre,
               email,
               telefono,
               empresa,
               id: Date.now()
          };
          
          crearNuevoCliente(cliente);
     }

     function crearNuevoCliente(cliente){

          const transaction=DB.transaction(['crm'],"readwrite");
          const objStore=transaction.objectStore("crm");
          objStore.add(cliente);

          transaction.onerror=()=>{
               imprimirAlerta("Hubo un error","error")
          };

          transaction.oncomplete=()=>{
               imprimirAlerta("Se agrego correctamente el usuario","correcto");
          };
     }

})();