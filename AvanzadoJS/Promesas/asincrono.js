let promesa=new Promise(
     (resolver)=>{
          console.log("inicio promesa");
          setTimeout(()=>resolver("Saludos con promesa y time out"),3000);
          console.log("termino promesa");
     }

);

promesa.then(valor=>console.log(valor));

let miPromesa=new Promise(
     (resolver,rechazar)=>{
          let bandera=true;
          if(bandera)
               resolver('Resolvio correcto');
          else 
               rechazar('Ocurrio un error');
     }
);

miPromesa.then(
     valor=>console.log(valor), 
     error=>console.log(error)
);

miPromesa.then(valor=>console.log(valor)).catch(error=>console.log(error));


