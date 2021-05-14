function sumar(){
     let formulario=document.getElementById("formulario");
     let numero1=parseInt(formulario["numero1"].value);
     let numero2=parseInt(formulario["numero2"].value);
     let resultado=numero1+numero2;
     if(!isNaN(resultado))
          document.getElementById('resultado').innerHTML=`La suma es ${resultado} `;
     else 
          document.getElementById('resultado').innerHTML=`Los datos son invalidos`;
}