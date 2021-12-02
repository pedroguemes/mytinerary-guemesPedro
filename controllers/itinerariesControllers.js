const Itinerary = require('../models/itinerario')

const itinerariesControllers = {
  obtenerItineraries:(req,res) => {
    Itinerary.find().populate('cities')
    .then((itineraries)=> res.json({itineraries}))
  },  
  cargarItinerary: (req,res)=>{
        const {nombreItinerary, imagenItinerary, user, price, duration, likes, hashtags, comments, cities} = req.body
         new Itinerary({nombreItinerary, imagenItinerary, user, price, duration, likes, hashtags, comments, cities}).save()
          .then((resp) => res.json({resp}))         
        },
   obtenerItinerary:(req,res) => {
       Itinerary.findOne({_id : (req.params.id)}).populate('cities')
        .then((itinerary)=> res.json({itinerary}))
      },
    
        modificarItineraryy: async (req,res)=>{
          const bodyItinerary = req.body
          let modifyItinerary 
          try {
            modifyItinerary = await City.findOneAndUpdate({_id : req.params.id},bodyItinerary,{ new: true})
          } catch (error) {
          }
          res.json({success: modifyItinerary ? true : false });
        },
        borrarItinerary: async (req,res)=>{
          let Itinerary
          const id = req.params.id
          try{
            city = await Itinerary.findOneAndDelete({
              _id:id})}catch(error) {
              console.log(error)
            }
            res.json({response:itinerary,success:true})
          }
        }


module.exports = itinerariesControllers