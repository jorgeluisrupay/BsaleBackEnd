require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


app.use('/',require('./routes/bsale'));


 
app.listen( process.env.PORT,() =>{
    console.log('Servidor corriendo en puerto',process.env.PORT);
});
