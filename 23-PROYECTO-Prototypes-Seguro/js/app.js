//OBJETO SEGURO
function Seguro(marca,year,tipo){
     this.marca=marca;
     this.year=year;
     this.tipo=tipo;
}

Seguro.prototype.cotizarSeguro=function(){
     let cantidad=0;
     const base=2000;
     switch(this.marca){
          case '1':
               cantidad=base*1.15;
               break;
          case '2':
               cantidad=base*1.05;
               break;
          case '3':
               cantidad=base*1.35;
               break;

          default:
               break;
     }
     const diferencia=new Date().getFullYear()-this.year;

     cantidad-=((diferencia*3)*cantidad)/100;

     if(this.tipo==="basico"){
          cantidad*=1.30;
     }else{
          cantidad*=1.50;
     }

     return cantidad;
}

//OBJETO UI 
function UI(){}

UI.prototype.llenarOpciones=()=>{
     const yearSelect=document.querySelector("#year");
     const max=new Date().getFullYear();
     const min=max-20;
     for(let i=min;i<=max;i++){
          const option=document.createElement("option");
          option.value=i;
          option.innerText=i;
          yearSelect.appendChild(option);
     }
     
}

UI.prototype.mensaje=(msj,tipo)=>{
     const formulario=document.querySelector("#cotizar-seguro");
     const div=document.createElement("div");
     switch(tipo){
          case "error":
               div.classList.add("mensaje","error","mt-10");
               break;
          case "correcto":
               div.classList.add("mensaje","correcto","mt-10");
               break;
          default:
               div.classList.add("mensaje");
               break;
          
     }
     div.textContent=msj;
     formulario.insertBefore(div,document.querySelector("#resultado"));
     setTimeout(()=>{div.remove()},3000);
};

UI.prototype.mostrarResultado=(seguro,total)=>{
     const resultado =document.querySelector("#resultado");
     const spinner =document.querySelector("#cargando");
     const div=document.createElement("div");
     div.classList.add("mt-10");
     div.innerHTML=`
          <p class='header'>Tu resumen</p>
          <p class='font-bold'>Total: ${total}</p>
     `;
     spinner.style.display="block";
     setTimeout(()=>{
          spinner.style.display="none";
          resultado.appendChild(div);
     },3000);
     

};

//INSTANCIAR OBJETOS 
const ui=new UI();

document.addEventListener("DOMContentLoaded",()=>{
     ui.llenarOpciones();
});

eventListeners();

function eventListeners(){
     
     const formulario=document.querySelector("#cotizar-seguro");
     formulario.addEventListener("submit",cotizarSeguro);

}

function cotizarSeguro(evt){
     evt.preventDefault();
     const marca=document.querySelector("#marca").value;
     const year=document.querySelector("#year").value;
     const tipo=document.querySelector("input[name='tipo']:checked").value;

     if(marca==='' || year==='' || tipo===''){
          ui.mensaje("Todos los campos son obligarotios","error");
     }
     ui.mensaje("Cotizando...","correcto");
     const resultado=document.querySelector("#resultado div");
     if(resultado!==null){
          resultado.remove();

     }
     const seguro=new Seguro(marca,year,tipo);
     const total=seguro.cotizarSeguro();
     ui.mostrarResultado(seguro,total);
}