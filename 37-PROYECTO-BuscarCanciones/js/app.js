import * as UI from './interfaz.js';
import Cancion from './api.js';

UI.formulario.addEventListener("submit",buscarCancion);

function buscarCancion(evt){
     evt.preventDefault();
     
     const artista=document.querySelector("#artista").value;
     const cancion=document.querySelector("#cancion").value;

     if(artista==='' || cancion ===''){
          UI.imprimirAlerta("Todos los campos son obligatorios","error");
          return;
     }

     const cancion2=new Cancion(artista,cancion);

}