const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
});

conexion.connect((error)=>{
    if (error) {
        console.error('El error de conexion es: ',error);
        return
    }
    console.log('Conextado a la BD MySQL');
})

module.exports =conexion;