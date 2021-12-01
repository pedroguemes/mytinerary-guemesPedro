const mongoose = require('mongoose');

// const productoSchema = new mongoose.Schema({
const ItinerarySchema = new mongoose.Schema({
    nombreItinerary:{type: String, required: true},
    imagenItinerario:{type: String},
    publisher:{type: string, required: true},
    price:{type: number, required: true},
    duration:{type: number, required: true},
    likes:{type:number,default: 0},
    comments:{type:string},cities:[{type:mongoose.Types.ObjectId, ref: "City", required: true}]
    
})

// const Producto = mongoose.model('NombreModelo', Schema)
const Itinerary = mongoose.model('Itinerary', ItinerarySchema)

module.exports = Itinerary;

// price:{Number min 1 max 5, required: true}