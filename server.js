const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Schema = mongoose.Schema;
const port = 3000;

// Conexión a MongoDB
mongoose.connect("mongodb+srv://frangamerdemon:queopinasdelarazaariaperonista4444@francluster.zudsgju.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define tu esquema
const ejemploSchema = new Schema({
    nombre: String,
    edad: Number,
    // Agrega otros campos según sea necesario
});

// Crea el modelo usando el esquema
const EjemploModel = mongoose.model('Ejemplo', ejemploSchema);

// Verifica la conexión
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", () => {
    console.log("Conexión exitosa a MongoDB");
});

app.use(express.json()); 
app.post('/', async (req, res) => {
  try {
      console.log("Recibiendo solicitud POST:", req.body);
      const nuevoEjemplo = new EjemploModel(req.body);
      const resultado = await nuevoEjemplo.save();
      console.log("Documento creado con éxito:", resultado);
      res.status(201).json(resultado);
  } catch (error) {
      console.error("Error al crear el documento:", error);
      res.status(500).json({ error: error.message });
  }
});

// Resto de tu configuración de Express

app.listen(port, () => {
    console.log(`Me estoy ejecutando en el puerto ${port}`);
});
