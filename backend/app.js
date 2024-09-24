//AQUI EN APP.JS ES DONDE SE CONTROLA TODA LA PARTE DE LOS MODELOS, CONTROLADOR, RUTAS
const express = require("express");
const cors = require('cors'); //termina: npm i cors
const dbconnect = require("./config");
const app = express();

// 4200 puerto con el q voy a trabajar con angular para conexiones q voy a tener
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'})) 
app.use('/api/usuarios',require('./rutas/usuario.rutas'));
app.use('/api/empleados',require('./rutas/empleado.rutas'));
app.listen(3005, ()=> {
    console.log("El servidor esta en el puerto 3005")
})

dbconnect();