const express = require("express");
const cors = require('cors');
const routerApi  = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handle');

const app = express();
const port = 3000;

app.use(express.json()); // para que el servidor entienda el formato json que le enviamos desde el cliente, es un middleware que se ejecuta antes de llegar a los endpoints, es decir, se ejecuta antes de llegar a los endpoints y se encarga de transformar el body de la request en un objeto json que podamos usar en nuestros endpoints.

const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const options = {
   origin: (origin, callback) => {
      if (whitelist.includes(origin)) {
         callback(null, true);
      } else {
         callback(new Error('No permitido'));
      }
   }
}
app.use(cors(options)); // para que el servidor permita las peticiones desde otros dominios, es un middleware que se ejecuta antes de llegar a los endpoints, es decir, se ejecuta antes de llegar a los endpoints y se encarga de permitir las peticiones desde otros dominios, es decir, permite las peticiones desde el cliente que esta en otro dominio diferente al del servidor.

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/nueva-ruta", (req, res) =>{
  res.send("Hola soy una nueva ruta");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>{
  console.log("My port: " + port);
});
