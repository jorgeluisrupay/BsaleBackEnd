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

router.get('/productos/buscador/:name', productoBuscadorName )







module.exports = router;