const mongoose = require('mongoose');

// const productoSchema = new mongoose.Schema({
const ItinerarySchema = new mongoose.Schema({
    city:[{type:mongoose.Types.ObjectId, ref: "city", required: true}],
    nombreItinerary:{type: String, required: true},
    imagenItinerario:{type: String},
    user:{type: String, required: true},
    price:{type: Number, required: true, min:1, max: 5 },
    duration:{type: Number, required: true},
    likes:{type:Number, default: 0},
    hashtags:{type:Array},
    comments:{type:String},
})

// const Producto = mongoose.model('NombreModelo', Schema)
const Itinerary = mongoose.model('itinerary', ItinerarySchema)

module.exports = Itinerary;

// price:{Number min 1 max 5, required: true}


// "cities":[{type:mongoose.Types.ObjectId, ref: "city", required: true}],
// "nombreItinerary":{type: String, required: true},
// "imagenItinerario":{type: String},
// "user":{type: String, required: true},
// "price":{type: Number, required: true, min:1, max: 5 },
// "duration":{type: Number, required: true},
// "likes":{type:Number, default: 0},
// "hashtags":{type:String, required:true},
// "comments":{type:String},