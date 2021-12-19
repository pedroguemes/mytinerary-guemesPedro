const mongoose = require('mongoose');
const ItinerarySchema = new mongoose.Schema({
    city:[{type:mongoose.Types.ObjectId, ref: "city", required: true}],
    nombreItinerary:{type: String, required: true},
    imagenItinerario:{type: String},
    user:[{type: mongoose.Types.ObjectId, ref:"user", required:true}],
    imagenUser:{type: String, required: true},
    price:{type: Number, required: true, min:1, max: 5 },
    description:{type: String, required: true},
    duration:{type: Number, required: true},
    likes:{type:Number, default: 0},
    hashtags:{type:Array},
})
const Itinerary = mongoose.model("itinerary", ItinerarySchema)
module.exports = Itinerary;
