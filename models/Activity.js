const mongoose = require('mongoose')

const  ActivitySchema = new mongoose.Schema({
   
        itineraryId:[{type: mongoose.Types.ObjectId, ref:"itinerary", required:true}],
        title:{type:String,required:true},
        image:{type:String,required:true},
        description:{type:String,required:true},
    
})

const Activity = mongoose.model('activity', ActivitySchema)

module.exports = Activity;
