import * as UI from './interfaz.js';

export default class Cancion{
     constructor(artista,nombre){
          this.artista=artista;
          this.nombre=nombre;
          this.consultarApi();
     }

     consultarApi(){
          const url=`https://api.lyrics.ovh/v1/${this.artista}/${this.nombre}`;
          
          fetch(url)
          .then(resultado=>resultado.json())
          .then(letra=>{
               if(letra.lyrics){
                    const {lyrics}=letra;
                    UI.resultado.innerHTML=lyrics;
                    UI.titulo.innerHTML=`La canción ${this.nombre} de ${this.artista}`;
               }else{
                    UI.imprimirAlerta("No se encontro, intente con otra canción","error");
               }
          });

     }
}