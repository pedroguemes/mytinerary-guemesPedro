const mongoose = require('mongoose')

const  activitySchema = new mongoose.Schema({
    activity:{
        itineraryId:{type: mongoose.Types.ObjectId, ref:'itinerario'},
        title:{type:String},
        image:{type:String},
        description:{type:String}
    },
})

const Activity = mongoose.model('activity',activitySchema)

module.exports=Activity
