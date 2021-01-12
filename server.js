const express = require('express');
require('dotenv').config();



const app = express();

//directorio publico
app.use(express.static('public'));


//Rutas
app.use('/api/items', require('./src/routes/searchEndp'));


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})