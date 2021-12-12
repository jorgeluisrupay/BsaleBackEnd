require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


app.use('/',require('./routes/bsale'));

app.use((error, req, res, next) => {
    res.status(400).json({
        status: error,
        message:err.message,
    })
})
 
app.listen( process.env.PORT,() =>{
    console.log('Servidor corriendo en puerto',process.env.PORT);
});
