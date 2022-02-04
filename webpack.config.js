const path = require("path");


module.exports = {  //Se crea un objeto para que pueda leer webpack
    entry: './src/app/index.js',          //Este es el archivo que debe convertir, este archivo es la entrada de webpack
    output: {                             // Esta es la salida del codigo en formato objeto
        path: __dirname + '/src/public',  // Ruta donde va a colocar la salida (dirname concatenado con src y public)
        filename: 'bundle.js'             // El nombre del archivo sera bundle
    },
    mode: "production",
    module: { //Vamos a decirle a webpack que se encargue de traducir codigo moderno  - Propiedad module que es un objeto
        rules: [ //El objeto de module tiene una propiedad llamada rules, que es un arreglo conformado por multiples objetos
            { //Cada objeto es una configuracion adicional a webpack
                use: 'babel-loader', //Que use el modulo babel loader
                test: /.(js)$/,      //Cuando utilice babel loader vas a tomar todos los archivos que terminan en .js
                exclude: /node_modules/ //Excluyendo la carpeta node modules
            }
        ]
    }
};