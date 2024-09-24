const mongoose = require('mongoose');
const dbconnect = ()=>{
    mongoose.set('strictQuery', true)
    mongoose.connect("mongodb://127.0.0.1:27017/gestion")
    .then((succes) => console.log("Conexión exitosa"))
    .catch((err)=> console.log(err.message));
}

module.exports = dbconnect;