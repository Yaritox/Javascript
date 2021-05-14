const express =require('express');
const mongoose=require('mongoose');
const routes=require('./routes');
const bodyParser=require('body-parser');
const cors=require('cors');

//crear el servidor 
const app = express(); 

/*
const listaBlanca=['http://localhost:3000','http://localhost:4000'];
const corsOptions={
     origin:(origin,callback)=>{
          const existe = listaBlanca.some(dominio => dominio===origin);
          if(existe){
               callback(null,true);
          }else{
               callback(new Error('No permitido por CORS'));
          }

     }
}
app.use(cors(corsOptions));*/
app.use(cors());
//conectar a mongoDB
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
     useNewUrlParser: true, 
     useUnifiedTopology:true, 
     useFindAndModify: false
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',routes());


// definir puerto y arrancar 

app.listen(4000,()=>{
     console.log("servidor funcionando");
});