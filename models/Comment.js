const mongoose = require('mongoose')

const  CommentSchema = new mongoose.Schema({
   
        itineraryId:[{type: mongoose.Types.ObjectId, ref:"itinerary", required:true}],
        user:[{type: mongoose.Types.ObjectId, ref:"user", required:true}],
        comment:{type:String,required:true},
       
    
})

const Comment = mongoose.model('comment', CommentSchema)

module.exports = Comment;
