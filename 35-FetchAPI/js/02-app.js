const json=document.querySelector("#cargarJSON");

json.addEventListener("click",cargarJson);

function cargarJson(){
     fetch('data/empleado.json')
     .then(resultado=> resultado.json())
     .then(datos=> mostrarResultado(datos))
     .catch(error=>console.log(error));

}

function mostrarResultado({id, nombre, empresa, trabajo}){
     const contenido=document.querySelector('.contenido');
     contenido.innerHTML=`
          id: ${id} <br>
          nombre: ${nombre} <br>
          empresa: ${empresa} <br>
          trabajo: ${trabajo} <br>

     `;
}