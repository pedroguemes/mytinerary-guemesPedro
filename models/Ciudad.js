const mongoose = require('mongoose');

// const productoSchema = new mongoose.Schema({
const CitySchema = new mongoose.Schema({
    nombreCiudad:{type: String, required: true},
    pais:{type: String, required: true},
    imagenCiudad:{type: String},
    itineraries:{type:[{type: mongoose.Types.ObjectId, ref:'itinerary'}]}
})

// const Producto = mongoose.model('NombreModelo', Schema)
const City = mongoose.model('City', CitySchema)

module.exports = City;