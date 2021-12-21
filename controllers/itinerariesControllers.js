const Itinerary = require("../models/itinerario");

const itinerariesControllers = {
  obtenerItineraries: (req, res) => {
    Itinerary.find()
      .populate("city")
      .then((itineraries) => res.json({ itineraries }));
  },
  cargarItinerary: (req, res) => {
    const bodyItinerary = req.body;
    new Itinerary(bodyItinerary).save().then((resp) => res.json({ resp }));
  },
  obtenerItinerary: (req, res) => {
    Itinerary.findOne({ _id: req.params.id })
      .populate("city")
      .then((itinerary) => res.json({ itinerary }));
  },

  modificarItinerary: async (req, res) => {
    const bodyItinerary = req.body;
    let modifyItinerary;
    try {
      modifyItinerary = await Itinerary.findOneAndUpdate(
        { _id: req.params.id },
        bodyItinerary,
        { new: true }
      );
    } catch (error) {}
    res.json({ success: modifyItinerary ? true : false });
  },
  
  borrarItinerary: async (req, res) => {
    let itinerary;
    const id = req.params.id;
    try {
      itinerary = await Itinerary.findOneAndDelete({
        _id: id,
      });
    } catch (error) {
      console.log(error);
    }
    res.json({ response: itinerary, success: true });
  },

  obtenerItineraryPorCity: (req, res) => {
    Itinerary.find({ city: req.params.id })
      .populate("city")
      .then((itineraries) => res.json({ itineraries }));
  },

  LikesAndDislikesController: async (req, res) => {
    Itinerary.findOne({_id: req.params.id})
    .then((itinerary) =>{
        if(itinerary.likes.includes(req.user._id)){
           Itinerary.findOneAndUpdate({_id:req.params.id}, {$pull:{likes:req.user.id}},{new:true})
           .then((newItinerary)=> res.json({success:true, response:newItinerary.likes}))
           .catch((error) => console.log(error))
        }else{
            Itinerary.findOneAndUpdate({_id: req.params.id}, {$push:{likes:req.user.id}},{new:true})
            .then((newItinerary) => res.json({success:true, response:newItinerary.likes}))
            .catch((error) => console.log(error))
        }
    })
    .catch((error) => res.json({success:false, response:error}))
  }
};

module.exports = itinerariesControllers;
