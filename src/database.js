//Conectarme a la base de datos
const mongoose = require('mongoose'); //Se instala un modulo que se llama mongosse, el cual nos permite conectarnos a la base de datos y al mismo tiempo definir como van a lucir los datos dentro de la base de datos

const URI = 'mongodb://localhost/mern-contractors'; //En una constante se guarda la conección con la base de datos

mongoose.connect(URI)//Como ya esta gurdada en una constante, ahora se puede utilizar su conexion y, adentro de los () se indica la dirección de la base de datos a conectar
    .then(db => console.log('DB is connected')) //then = cuando se conecte quiero obtener los datos y mostrar un mesaje
    .catch(err => console.log(err)) //En caso de tener un error, cacharlo y mostrarlo.

module.exports = mongoose;  //Exportar el archivo para poder utilizarlo por mi servidor