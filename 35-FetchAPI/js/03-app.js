const jsonA=document.querySelector("#cargarJSONArray");

jsonA.addEventListener("click",cargarJsonA);
//document.addEventListener("DOMContentLoaded",cargarJsonA);


function cargarJsonA(){
     fetch('data/empleados.json')
     .then(resultado=> resultado.json())
     .then(datos=> mostrarResultados(datos))
     .catch(error=>console.log(error));

}

function mostrarResultados(empleados){
     const contenido=document.querySelector('.contenido');
     contenido.innerHTML="";
     empleados.forEach(({id, nombre, empresa, trabajo}) => {
          contenido.innerHTML +=`
          id: ${id} <br>
          nombre: ${nombre} <br>
          empresa: ${empresa} <br>
          trabajo: ${trabajo} <br>`;
          
     });
     
}