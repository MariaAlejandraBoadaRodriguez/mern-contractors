//Este archivo es de Express de Node.js el que nos permite inicializar nuestro servidor.
const express = require('express'); //Requiro express y lo alamaceno en una constante del mismo nombre
const morgan = require('morgan'); //Requiero el modulo morgan y lo guardo en una constante
const path = require('path'); // Este modulo llamado path ya viene instalado con node.js

const { mongoose } = require('./database') //Requiero el modulo mongoose desde el archivo database.js

const app = express(); //Cuando lo ejecuto tengo un objeto que almaceno en una constante app (servidor)

/*    SECCIONES    */

//Settings (Configuraciones del servidor)

app.set('port', process.env.PORT || 3000);//Configuración por si quiero subirlo a un servidor, app vpu a establecerte una configuración atraves de tu metodo set. El nombre de la configuración es del puerto (port) y voy a darte como valor el process.env. PORT es decir que tome el puerto que esta configurado de mi aplicación en el sistema operativo

//Middlewares(Funciones que se ejecutan antes de que lleguen a las rutas)

app.use(morgan('dev')); // app utiliza el modulo, pero debido que estas son funciones que se ejecutan antes que lleguen las rutas, voy a ejecutar la función reciviendo el parametro (dev) como string - es decir que voy a ver un mensaje con un formateado de texto, es decir voy apoder ver el mensaje de alguna manera
app.use(express.json()); // Lo que hace es que cada vez que llega un dato a nuestro servidor va a pasar por esta función, y esta función va a comprobar si este dato es un formato json. Si lo es nosotros vamos a poder acceder a el dentro de nuestro codigo de servidor y de esta manera tambien vamos a poder enviar datos en codigo Json.

//Routes (URL que tendra el servidor)

app.use('/api/contactors',require('./routes/contractors.routes')); // App utiliza ese archivo que esta dentro de la carpeta routes

//Static file (Decirle a express donde iran los archivos estaticos - HTML, CSS, JavaScrips)

app.use(express.static(path.join(__dirname,'public'))); //App utiliza un modulo de express llamado static, este modulo por defecto encuentra la carpeta public, pero como la carpeta se encuentra dentro de la carpeta src tenemos que indicarle la nueva ruta

//Staring the server

app.listen(app.get('port'),()=>{   //Este app es un servidor y puedo decir servidor(app) escucha en el puerto 3000 y ejecuta una tarea. app.get(port) es la configuración de settings
    console.log(`server on port ${app.get('port')}`)     // Por eso la escucha se poner como función para que haga algo en este caso que salga un mensaje. Y que traiga el puerto que esta configurado en settings
}) 