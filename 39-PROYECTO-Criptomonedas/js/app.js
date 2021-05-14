const criptomonedaSelect = document.querySelector("#criptomoneda");
const monedaSelect = document.querySelector("#moneda");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

const obj= {
     moneda:'',
     criptomoneda:''
}

function submitFormulario(evt){
     evt.preventDefault();

     const {moneda,criptomoneda}=obj
     if(moneda===''|| criptomoneda===''){
          imprimirAlerta("Son necesarios todos los campos","error");
          return;
     }
     consultarApi();
}

function consultarApi(){
     const {moneda,criptomoneda}=obj;
     const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
     mostrarSpinner();
     fetch(url)
     .then(respuesta=>respuesta.json())
     .then(cotizacion=>mostrarCotizacion(cotizacion.DISPLAY[criptomoneda][moneda]));
}
function mostrarSpinner(){
     resultado.innerHTML="";
     const spinner = document.createElement("div");
     spinner.classList.add("spinner");
     spinner.innerHTML=`
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>`;
     resultado.appendChild(spinner);
}
function mostrarCotizacion({PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,LASTUPDATE}){
     resultado.innerHTML="";
     const precio = document.createElement("p");
     precio.classList.add("precio");
     precio.innerHTML=`Precio: <span>${PRICE}</span>`;
     
     const alto = document.createElement("p");
     alto.innerHTML=`Precio más alto del día: <span>${HIGHDAY}</span>`;

     const bajo = document.createElement("p");
     bajo.innerHTML=`Precio más bajo del día: <span>${LOWDAY}</span>`;

     const hrs = document.createElement("p");
     hrs.innerHTML=`Variarion ultimas hrs: <span>${CHANGEPCT24HOUR}%</span>`;

     const ultima = document.createElement("p");
     ultima.innerHTML=`Ultima actualización: <span>${LASTUPDATE}</span>`;

     resultado.appendChild(precio);
     resultado.appendChild(alto);
     resultado.appendChild(bajo);
     resultado.appendChild(hrs);
     resultado.appendChild(ultima);
}

const obtenerCriptomonedas=criptomonedas=> new Promise(resuelto=>{
     resuelto(criptomonedas);
});

document.addEventListener("DOMContentLoaded",()=>{
     consultarCriptomonedas();
     formulario.addEventListener("submit",submitFormulario);
     criptomonedaSelect.addEventListener("change",leerValor);
     monedaSelect.addEventListener("change",leerValor);

});
function leerValor(evt){
     obj[evt.target.name]=evt.target.value;
     console.log(obj);

}
function consultarCriptomonedas(){
     
     const url="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
     fetch(url)
     .then(respuesta=>respuesta.json())
     .then(resultado=>obtenerCriptomonedas(resultado.Data))
     .then(criptomonedas=>selectCriptoMonedas(criptomonedas));

}

function selectCriptoMonedas(criptomonedas){
     criptomonedas.forEach(criptomoneda => {
          const{FullName,Name}=criptomoneda.CoinInfo;
          const option = document.createElement("option");
          option.value=Name;
          option.textContent=FullName;
          criptomonedaSelect.appendChild(option);
     });
}
function  imprimirAlerta(msj,tipo){
     const div=document.createElement("div");
     div.textContent=msj;
     switch(tipo){
          case 'error':
                div.classList.add("error");
               break;
          case 'correcto':
               div.classList.add("bg-green-100","border-green-400","text-green-700","px-4","py-3","rounded","max-w-md","mx-auto","mt-6","text-center");
               break;
     }
     formulario.appendChild(div);
     setTimeout(()=>{div.remove()},3000);
}