const express = require('express');
const { categoriasGet, 
        productosGet, 
        productoGetPorId, 
        categoriaGetList, 
        productoBuscadorName} = require('../controllers/bsale');
const router = express.Router();


router.get('/categorias', categoriasGet)

router.get('/categorias/:id', categoriaGetList)

router.get('/productos', productosGet)

router.get('/productos/:id', productoGetPorId)

router.get('/buscador/:name', productoBuscadorName )

router.get('/**', (req, res) => {
        res.json({
                msg: "Ruta no encontrada en el servidor",
                status: 404,
            });
})







module.exports = router;