(function(){
     let DB;
     let idCliente;
     const formulario=document.querySelector("#formulario");
     document.addEventListener("DOMContentLoaded",()=>{
          conectarDB();
          
          formulario.addEventListener("submit",actualizarCliente);
          
          const url=new URLSearchParams(window.location.search);

          idCliente=url.get("id");
          if(idCliente){
               setTimeout(()=>{
                    obtenerCliente(idCliente);
               },1000);
               
          }
     });

     function actualizarCliente(evt){
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
               id: Number(idCliente)
          };
          
          const transaction=DB.transaction(['crm'],"readwrite");
          const objStore=transaction.objectStore("crm");
          objStore.put(cliente);
          transaction.oncomplete=()=>{
               imprimirAlerta("Se edito correctamente","correcto");
               setTimeout(()=>{
                    window.location.href="index.html";
               },4000)
          };
          transaction.onerror=()=>{
               imprimirAlerta("Hubo un error","error");
          };
     }
     function obtenerCliente(id){
          const transaction=DB.transaction(['crm'],"readwrite");
          const objStore=transaction.objectStore("crm");
          const cliente=objStore.openCursor();
          cliente.onsuccess=(evt)=>{
               const cursor=evt.target.result;
               if(cursor){
                    if(cursor.value.id===Number(id)){
                         const{nombre,email,telefono,empresa}=cursor.value;
                         document.querySelector("#nombre").value=nombre;
                         document.querySelector("#email").value=email;
                         document.querySelector("#telefono").value=telefono;
                         document.querySelector("#empresa").value=empresa;
                    }
                    cursor.continue();
               }

          }
     }


     function conectarDB(){
          const abrirConexion=window.indexedDB.open("crm");

          abrirConexion.onerror=()=>{
               console.log("hubo un error");
          };

          abrirConexion.onsuccess=()=>{
               DB=abrirConexion.result;
          }
     }
})();