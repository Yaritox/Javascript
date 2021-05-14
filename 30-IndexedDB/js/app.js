let BD;

document.addEventListener("DOMContentLoaded",()=>{
     crmBd();

     setTimeout(()=>{
          crearCliente();
     },5000);
});

function crmBd(){
     console.log("Crear crmBD");
     let crmBd=window.indexedDB.open("crm",1);
     console.log("Si hay un error");
     crmBd.onerror=function(){
          console.log("hubo un error al crear la crmBD");
     }
     console.log("Si se creo bien");
     crmBd.onsuccess=function(){
          console.log("la base de datos se creo");
          BD=crmBd.result;

     }
     console.log("configuracion");
     crmBd.onupgradeneeded=function(e){
          const bd=e.target.result;
          const objStore=bd.createObjectStore('crm',{
               keyPath: 'crm',
               autoIncrement: true
          });

          objStore.createIndex("nombre","nombre",{unique: false});
          objStore.createIndex("email","email",{unique: true});
          objStore.createIndex("telefono","telefono",{unique: false});

          console.log("Columnas creadas");
     }
}

function crearCliente(){
     let transaction=BD.transaction("crm","readwrite");
     transaction.oncomplete=function(){
          console.log("transacción completada");
     }
     transaction.onerror=function(){
          console.log("hubo un error");
     }
     
     const objStore= transaction.objectStore('crm');

     const cliente={
          nombre:"Jordi",
          email:"mail@mail.com",
          telefono:2481308139
     }
     const peticion=objStore.add(cliente);
     console.log(peticion);

}