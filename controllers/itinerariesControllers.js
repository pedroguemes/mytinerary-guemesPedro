const Itinerary = require('../models/itinerario')

const itinerariesControllers = {
  obtenerItineraries:(req,res) => {
    Itinerary.find()
    .then((itineraries)=> res.json({itineraries}))
  },  
  cargarItinerary: (req,res)=>{
        const {nombreItinerary, imagenItinerary} = req.body
         new City({nombreItinerary, imagenItinerary}).save()
          .then((resp) => res.json({resp}))         
        },
   obtenerItinerary:(req,res) => {
       Itinerary.findOne({_id : (req.params.id)})
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