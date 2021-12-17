const mongoose = require('mongoose');
const ItinerarySchema = new mongoose.Schema({
    city:[{type:mongoose.Types.ObjectId, ref: "city", required: true}],
    nombreItinerary:{type: String, required: true},
    imagenItinerario:{type: String},
    userName:{type: String, required: true},
    imagenUser:{type: String, required: true},
    price:{type: Number, required: true, min:1, max: 5 },
    description:{type: String, required: true},
    duration:{type: Number, required: true},
    likes:{type:Number, default: 0},
    hashtags:{type:Array},
    comments:{type:String},
})
const Itinerary = mongoose.model("itinerary", ItinerarySchema)
module.exports = Itinerary;
