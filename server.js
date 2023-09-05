const express = require('express') //Para incluir el Framework
const app = express(); //Instancia del framework express
const bodyParser = require('body-parser')
const morgan = require('morgan') //Información de las peticiones

//Validamos que no estemos  en el ambiente de producciòn
if(process.env.NODE_ENV != 'production'){
    //Se carga la configuración del archivo .env al process .env
     require('dotenv').config()
}

app.set('port' , process.env.PORT || 4000)

//Middlewares
app.use(bodyParser.urlencoded({ extended:false})) //Recibir datos formularios sencillos
app.use(bodyParser.json()) //Para json
app.use(morgan('combined'))

app.use('/api/v1/users', require('./api/v1/routes/users.routes')); //Ruta para users con la versión 1 de la API
app.use('/api/v1/articles', require('./api/v1/routes/articles.routes')); // Ruta para articles con la versión 1 de la API
app.use('/api/v1/categories', require('./api/v1/routes/categories.routes')); // Ruta para categories con la versión 1 de la API

// app.get('/',(req,res) =>{
//     console.log("get ruta principal")
//     res.send({Tittle:'Saludos ADSO!'})
// })

app.listen(app.get('port'),() => {
    console.log(`Server running on localhost:${app.get('port')}`);
}) //Es el que inicia el servidor 