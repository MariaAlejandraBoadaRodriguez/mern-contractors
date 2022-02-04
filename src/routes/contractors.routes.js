/*Definir las operaciones a traves de las URLS que vamos a dar en nuestro servidor. Es decir, se agrega una URL
Para que una persona pueda agregar una tarea, otra url para que pueda editarlo, otra para elminarlo.*/
const express = require('express'); //Requiero express para crear rutas. Por ello guardo express en una constante.
const router = express.Router(); //Voy a utilizar desde express un metodo llamado Router. Este metodo me va a devolver un objeto en el cual yo voy a poder ingresar rutas

/* METODOS CRUD */

/* MODELO DE DATOS */
const Contratistas = require('../models/contractors');

/* METODO GET - Para obtener los datos de la Base de Datos*/
router.get('/', async (req, res) => {  
    const contractors = await Contratistas.find(); //await nos esta diciendo que Contratistas.find() tomara algo de tiempo. Por eso luego de que termine yo quiero que me las almacene en una constante
    res.json(contractors);   
});

/* METODO GET-ID - Para obtener los datos de un solo contratista de la Base de Datos*/
router.get('/:id', async (req, res) => {
    const findContractors = await Contratistas.findById(req.params.id);
    res.json(findContractors);
});

/* METODO POST - Para poner los datos en la Base de Datos*/
router.post('/', async (req, res) => { //El metodo POST es un metodo usado en http, para poder agregar datos.
    const {cedula, nombre} = req.body; //El navegador me envia datos y yo los podre obtener con el req.body
    const newContractors = new Contratistas({cedula, nombre}); //Se crea un nuevo contratista en el modelo
    await newContractors.save(); //Cuando termine de hacer esta tarea sigue con la siguiente
    res.json({status: 'Contractor Saved'}); //Enviamos un mensaje de recibido al cliente que haga esta petición POST
});

/* METODO PUT - Para actualizar los datos en la Base de Datos*/
router.put('/:id', async (req, res) => {
    const {cedula, nombre} = req.body; //Vamos a obtener los nuevos datos
    const updateContractors = {cedula, nombre}; //Obtener el contratista 
    await Contratistas.findByIdAndUpdate(req.params.id, updateContractors); //Aqui tengo el ID de la tarea que quiero actualizar
    res.json({status: 'Contractor Update'});
});

/* METODO DELETE - Para eliminar los datos en la Base de Datos*/
router.delete('/:id', async (req, res) => {
    await Contratistas.findByIdAndRemove(req.params.id);
    res.json({status: 'Contractor Delete'});
});

module.exports = router; //Aqui la estoy estoy exportando router.  Yo voy a poder definir rutas de mi servidor