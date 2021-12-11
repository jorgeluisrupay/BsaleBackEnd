const express = require('express');
const app = express();


app.use('/',require('./routes/bsale'));

app.listen(5000,() => {
    console.log('Server corriendo en el puerto 5000');
});

