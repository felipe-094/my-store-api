const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => { // estamos creando un buevo enpoints
   const { limit, offset } = req.query; // vamos a tener parametros tipo query sus nombres van a hacer limit y offset
   if (limit && offset) { // validamos que existen si existen devolvemos ese valor
      res.json({
         limit,
         offset
      });
   } else { // si no le enviamos otro valor con send normal diciendo que no hay ningun parametro
      res.send('No hay parametros');
   }
});

module.exports = router;