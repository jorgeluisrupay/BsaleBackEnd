require('dotenv').config();
const express = require('express');
const app = express();


app.use('/',require('./routes/bsale'));


 
app.listen( process.env.PORT,() =>{
    console.log('Servidor corriendo en puerto',process.env.PORT);
});
