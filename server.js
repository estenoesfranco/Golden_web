const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Schema = mongoose.Schema;

const ejemploSchema = new Schema({
  // Define tu esquema aquí
});

const EjemploModel = mongoose.model('Ejemplo', ejemploSchema);

module.exports = EjemploModel;
// Conexión a MongoDB
mongoose.connect("tu_cadena_de_conexion", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Verifica la conexión
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", () => {
    console.log("Conexión exitosa a MongoDB");
});

// Resto de tu configuración de Express
