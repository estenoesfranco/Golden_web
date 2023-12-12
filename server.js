const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Schema = mongoose.Schema;
const port = 3000;
const Schema4444 = require("./Controllers/information");
// Conexión a MongoDB
mongoose.connect("mongodb+srv://frangamerdemon:queopinasdelarazaariaperonista4444@Francluster.zudsgju.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// Verifica la conexión
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", () => {
    console.log("Conexión exitosa a MongoDB");
});

app.use(express.json());

app.get('/', async (req, res) =>{
        console.log("DATO ENVIADO")
        res.send(await Schema4444.find())

})

app.post('/', async (req, res) => {
  try {
      console.log("Recibiendo solicitud POST:", req.body);
      const nuevoSchema = new Schema4444(req.body);
      const resultado = await nuevoSchema.save();
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
