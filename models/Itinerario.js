const mongoose = require('mongoose');

// const productoSchema = new mongoose.Schema({
const ItinerarySchema = new mongoose.Schema({
    nombreItinerary:{type: String, required: true},
    imagenItinerario:{type: String},
})

// const Producto = mongoose.model('NombreModelo', Schema)
const Itinerary = mongoose.model('Itinerary', ItineraryySchema)

module.exports = City;