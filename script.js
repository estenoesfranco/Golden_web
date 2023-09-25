const express = require('express');
const mongodb = require('mongodb');
const port = 4444;
const server = express();

server.get('/', (req, res) => {
    res.render('/index.html')
   });



server.get('/Saludo1', (req, res) => {
     console.log("holaaaa")
    });
console.log('vos: hola mundo')



server.post('/Saludo2', (req, res) => {
    console.log("holaaaa que tal usuario?")
    
   })
console.log('mundo: hola usuariooo');


server.get('/Saludo1', (req, res) => {
    console.log("holaaaa")
   });
console.log('vos: como estas?')


server.post('/Saludo2', (req, res) => {
    console.log("holaaaa que tal usuario?")
   })
console.log('mundo: muy FRENETICO');

server.listen(port, () => {
    console.log(`El servidor aun no está funcionando en http://localhost:${port}/`);
  });

