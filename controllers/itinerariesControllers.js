const Itinerary = require('../models/itinerario')

const itinerariesControllers = {
  obtenerItineraries:(req,res) => {
    Itinerary.find().populate('city')
    .then((itineraries)=> res.json({itineraries}))
  },  
  cargarItinerary: (req,res)=>{
        const bodyItinerary= req.body
         new Itinerary(bodyItinerary).save().populate('city')
          .then((resp) => res.json({resp}))         
        },
   obtenerItinerary:(req,res) => {
       Itinerary.findOne({_id : (req.params.id)}).populate('city')
        .then((itinerary)=> res.json({itinerary}))
      },
    
        modificarItinerary: async (req,res)=>{
          const bodyItinerary = req.body
          let modifyItinerary 
          try {
            modifyItinerary = await Itinerary.findOneAndUpdate({_id : req.params.id},bodyItinerary,{ new: true})
          } catch (error) {
          }
          res.json({success: modifyItinerary ? true : false });
        },
        borrarItinerary: async (req,res)=>{
          let itinerary
          const id = req.params.id
          try{
            itinerary = await Itinerary.findOneAndDelete({
              _id:id})}catch(error) {
              console.log(error)
            }
            res.json({response:itinerary,success:true})
          }
        }


module.exports = itinerariesControllers