const { response } = require("express");
const conexion = require("../database/db");

const categoriasGet = (req, res = response) => {
  conexion.query("SELECT * FROM category", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
};

const categoriaGetList = (req, res = response) => {
    const {id} = req.params;
  conexion.query(`SELECT * FROM product WHERE category='${id}'`, (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
};

const productosGet = (req, res = response) => {
  conexion.query("SELECT * FROM product", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
};

const productoGetPorId = (req, res = response) => {
    const {id} = req.params;
    if (isNaN(id)) {
      res.json({
        msg: "Ingresar un parametro numerico",
        status: 404,
    });
    return
    }
    else{
      conexion.query(`SELECT * FROM product WHERE id=${id}`, (error, results) => {
        if (error) {
          throw error;
        } else {
          res.send(results);
        }
      });
      console.log("es numero");
    }
  
};

const productoBuscadorName = (req, res = response) => {
    const {name} = req.params;
    const nameLike = `%${name}%`
    const query = `SELECT * FROM product WHERE name LIKE ${conexion.escape(nameLike)}`;
  conexion.query(query, (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
};





module.exports = {
  categoriasGet,
  categoriaGetList,
  productosGet,
  productoGetPorId,
  productoBuscadorName
};
