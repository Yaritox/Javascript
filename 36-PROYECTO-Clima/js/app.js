const formulario=document.querySelector("#formulario");
const resultado=document.querySelector("#resultado");
const container=document.querySelector(".container");

window.addEventListener("load",()=>{
     formulario.addEventListener("submit",buscarClima);
});

function buscarClima(evt){
     evt.preventDefault();
     const ciudad=document.querySelector("#ciudad").value;
     const pais=document.querySelector("#pais").value;

     if(ciudad==='' || pais===''){
          imprimirAlerta("Los 2 campos son obligatorios","error");
          return;
     }
     consultarApi(ciudad,pais);
}


function  imprimirAlerta(msj,tipo){
     const div=document.createElement("div");
     div.classList.add("text-center", "alert","d-block","col-12");
     div.textContent=msj;
     switch(tipo){
          case 'error':
               div.classList.add("bg-red-100","border-red-400","text-red-700","px-4","py-3","rounded","max-w-md","mx-auto","mt-6","text-center");
               break;
          case 'correcto':
               div.classList.add("bg-green-100","border-green-400","text-green-700","px-4","py-3","rounded","max-w-md","mx-auto","mt-6","text-center");
               break;
     }
     container.appendChild(div);
     setTimeout(()=>{div.remove()},3000);
}

function consultarApi(ciudad,pais){
     const id="95fe7551f5c8e3334eab036e46d23cfd";
     const url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${id}`;

     spinner();

     fetch(url)
     .then(resultado=>resultado.json())
     .then(datos=>{
          resultado.innerHTML="";
          if(datos.cod==='404'){
               imprimirAlerta("Esa ciudad no existe","error");
          }else{
               console.log(datos);
               mostrarClima(datos);
          }
     });

}

function mostrarClima({name,main:{temp,temp_max,temp_min}}){
     temp=kelvinCentigrados(temp);
     temp_max=kelvinCentigrados(temp_max);
     temp_min=kelvinCentigrados(temp_min);

     const ciudad=document.createElement("p");
     ciudad.textContent=name;
     ciudad.classList.add("font-bold","text-6xl");

     const actual=document.createElement("p");
     actual.innerHTML=`${temp} &#8451;`;
     actual.classList.add("font-bold","text-6xl");

     const maxima=document.createElement("p");
     maxima.innerHTML=`${temp_max} &#8451;`;
     maxima.classList.add("text-xl");


     const minima=document.createElement("p");
     minima.innerHTML=`${temp_min} &#8451;`;
     minima.classList.add("text-xl");

     const div=document.createElement("div");
     div.classList.add("text-center","text-white");
     div.appendChild(ciudad);
     div.appendChild(actual);
     div.appendChild(maxima);
     div.appendChild(minima);
     
     
     resultado.appendChild(div);
}

const kelvinCentigrados= grados=>parseInt(grados-273.15);

function spinner(){
     resultado.innerHTML="";
     const spinner=document.createElement("div");
     spinner.classList.add("sk-fading-circle");
     spinner.innerHTML=`
     <div class="sk-circle1 sk-circle"></div>
     <div class="sk-circle2 sk-circle"></div>
     <div class="sk-circle3 sk-circle"></div>
     <div class="sk-circle4 sk-circle"></div>
     <div class="sk-circle5 sk-circle"></div>
     <div class="sk-circle6 sk-circle"></div>
     <div class="sk-circle7 sk-circle"></div>
     <div class="sk-circle8 sk-circle"></div>
     <div class="sk-circle9 sk-circle"></div>
     <div class="sk-circle10 sk-circle"></div>
     <div class="sk-circle11 sk-circle"></div>
     <div class="sk-circle12 sk-circle"></div>`;

     resultado.appendChild(spinner);
}