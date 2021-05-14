const marcaSelect=document.querySelector("#marca");
const minimoSelect=document.querySelector("#minimo");
const maximoSelect=document.querySelector("#maximo");
const puertasSelect=document.querySelector("#puertas");
const transmisionSelect=document.querySelector("#transmision");
const colorSelect=document.querySelector("#color");
const yearSelect=document.querySelector("#year");
const resultado=document.querySelector("#resultado");
const yearActual= new Date().getFullYear();
const yearMin=yearActual-10;

const busqueda={
     marca: '',
     year: '',
     minimo:'',
     maximo:'',
     puertas: '',
     color: '',
     transmision: ''
};

document.addEventListener("DOMContentLoaded",()=>{

     rellenarYear();
     mostrarAutos(autos);

});

marcaSelect.addEventListener("change",evt=>{
     busqueda.marca=evt.target.value;
     filtrarAuto();
});
yearSelect.addEventListener("change",evt=>{
     busqueda.year=parseInt(evt.target.value);
     filtrarAuto();
});

minimoSelect.addEventListener("change",evt=>{
     busqueda.minimo=parseInt(evt.target.value);
     filtrarAuto();
});
maximoSelect.addEventListener("change",evt=>{
     busqueda.maximo=parseInt(evt.target.value);
     filtrarAuto();
});
puertasSelect.addEventListener("change",evt=>{
     busqueda.puertas=parseInt(evt.target.value);
     filtrarAuto();
});
transmisionSelect.addEventListener("change",evt=>{
     busqueda.transmision=evt.target.value;
     filtrarAuto();
});
colorSelect.addEventListener("change",evt=>{
     busqueda.color=evt.target.value;
     filtrarAuto();
     console.table(busqueda);
});

function mostrarAutos(autos){
     resultado.innerHTML=" ";
     autos.forEach(auto => {
          const {marca,modelo,year,precio,puertas,color, transmision}=auto;

          const parrafo=document.createElement("p");

          parrafo.innerHTML=`
               ${marca} - ${modelo} - ${year} - $${precio} - ${puertas} - ${color} - ${transmision}
          `;
          
          resultado.appendChild(parrafo);
     });
}

function rellenarYear(){

     for(let i=yearMin; i<=yearActual; i++){
          const option=document.createElement("option");
          option.textContent=i;
          option.value=i;
          yearSelect.appendChild(option);

     }
}
function filtrarAuto(){
     const resultado=autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
     if(resultado.length>0)
          mostrarAutos(resultado);
     else{
          noResultado();
     }

}

function filtrarMarca(auto){
     const {marca}=busqueda;
     if(marca){
          return auto.marca===marca;
     }
     //si no hay valor en marca se regresan todos 
     return auto;
}

function filtrarYear(auto){
     const {year}=busqueda;
     if(year){
          return auto.year===year;
     }
     //si no hay valor en marca se regresan todos 
     return auto;

}

function filtrarMinimo(auto){
     const {minimo}=busqueda;
     if(minimo){
          return auto.precio>=minimo;
     }
     //si no hay valor en marca se regresan todos 
     return auto;

}

function filtrarMaximo(auto){
     const {maximo}=busqueda;
     if(maximo){
          return auto.precio<=maximo;
     }
     //si no hay valor en marca se regresan todos 
     return auto;

}

function filtrarPuertas(auto){
     const {puertas}=busqueda;
     if(puertas){
          return auto.puertas===puertas;
     }
     //si no hay valor en marca se regresan todos 
     return auto;

}

function filtrarTransmision(auto){
     const {transmision}=busqueda;
     if(transmision){
          return auto.transmision===transmision;
     }
     //si no hay valor en marca se regresan todos 
     return auto;

}

function filtrarColor(auto){
     const {color}=busqueda;
     if(color){
          return auto.color===color;
     }
     //si no hay valor en marca se regresan todos 
     return auto;

}

function noResultado(){
     const div=document.createElement("div");
     div.classList.add("alerta","error");
     div.textContent="No hay resultados";
     resultado.innerHTML=" ";
     resultado.appendChild(div);
}