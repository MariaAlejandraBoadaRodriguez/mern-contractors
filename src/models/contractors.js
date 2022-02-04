//Modelos de la base de datos. Diseñar el esquema de los datos. 
const mongoose = require('mongoose'); //Vamos a requerir mongoose y se guarda en una constante, pero no para conectarnos, sino para modelar los datos
const { Schema } = mongoose; //Solamente requiero una parte de mongoose, requiero solamente el schema (Esquema) Para definir el esquema de los datos. Propiedades de un contratista etc

const ContractorsSchema = new Schema({ //constante de las tareas
    cedula: { type: String, required: true},
    nombre: { type: String, required: true}
});

module.exports = mongoose.model('Contractors', ContractorsSchema); //Mongosse tiene un metodo llamado model el cual le damos el nombre del modelo y como estructura tendra el esquema definido arriba