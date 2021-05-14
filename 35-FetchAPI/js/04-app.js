const jsonApi=document.querySelector("#cargarAPI");

jsonApi.addEventListener("click",cargarJsonApi);
//document.addEventListener("DOMContentLoaded",cargarJsonApi);


function cargarJsonApi(){
     fetch('https://picsum.photos/list')
     .then(resultado=> resultado.json())
     .then(datos=> mostrarResultados(datos))
     .catch(error=>console.log(error));

}

function mostrarResultados(empleados){
     const contenido=document.querySelector('.contenido');
     contenido.innerHTML="";
     empleados.forEach(({author,post_url}) => {
          contenido.innerHTML +=`
          <p>Author: ${author}</p>
          <a href='${post_url}'>${post_url}</a> `;
          
     });
     
}