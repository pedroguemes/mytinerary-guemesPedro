const mongoose = require('mongoose');

// const productoSchema = new mongoose.Schema({
const CitySchema = new mongoose.Schema({
    name:{string},
    pais:{type:string},
    descripcion:{types:string}
})

// const Producto = mongoose.model('NombreModelo', Schema)
const City = mongoose.model('City', CitySchema)