(function (){
     let BD;
     const tabla=document.querySelector("#listado-clientes");
     document.addEventListener("DOMContentLoaded",()=>{
          createDB();

          if(window.indexedDB.open("crm")){
               obtenerClientes();
          }
          tabla.addEventListener('click',eliminarRegistro);
     });

     function createDB(){
          const createDB=window.indexedDB.open("crm");
          
          createDB.onerror=()=>{
               console.log("hubo un error");
          };

          createDB.onsuccess=()=>{
               BD=createDB.result;
          }

          createDB.onupgradeneeded=(evt)=>{
               const result=evt.target.result;

               const objStore=result.createObjectStore("crm",{
                    keyPath: 'id', 
                    autoIncrement: true
               });

               objStore.createIndex("nombre","nombre",{unique: false});
               objStore.createIndex("email","email",{unique: true});
               objStore.createIndex("telefono","telefono",{unique: false});
               objStore.createIndex("empresa","empresa",{unique: false});
               objStore.createIndex("id","id",{unique: true});

               console.log("BD creada");

          }
     }
     function obtenerClientes(){
          const abrirConexion=window.indexedDB.open("crm");
          abrirConexion.onerror=()=>{
               console.log("Error");
          }
          abrirConexion.onsuccess=()=>{
               BD=abrirConexion.result;
               const objStore=BD.transaction("crm").objectStore("crm");
               objStore.openCursor().onsuccess=(e)=>{
                    const cursor=e.target.result;
                     if(cursor){
                         console.log(cursor.value);
                         const {id,nombre,email,telefono,empresa}=cursor.value;
                         
                         tabla.innerHTML+=
                         ` <tr>
                                   <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                   <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                   <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                                   </td>
                                   <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                   <p class="text-gray-700">${telefono}</p>
                                   </td>
                                   <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                   <p class="text-gray-600">${empresa}</p>
                                   </td>
                                   <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                   <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                   <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                                   </td>
                              </tr>
                         `;

                         cursor.continue();
                     }else{
                          console.log("No hay más registros");
                     }
                     
               };

              
          }
     }

     function eliminarRegistro(evt){
          if(evt.target.classList.contains("eliminar")){
               const idEliminar=Number(evt.target.dataset.cliente);

               const confirmar=confirm("Desea eliminar este cliente");

               if(confirmar){
                    const transaction=BD.transaction(['crm'],"readwrite");
                    const objStore=transaction.objectStore("crm");
                    objStore.delete(idEliminar);

                    transaction.oncomplete=()=>{
                         evt.target.parentElement.parentElement.remove();
                    };
                    transaction.onerror=()=>{
                         console.log("error");
                    };
               }

          }

     }

})();
