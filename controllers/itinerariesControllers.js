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
      .then((itineraries) =>
    //  { console.log(itineraries)
     { res.json({ itineraries })}
      );
  },
  
  LikesAndDislikesController: async (req, res) => {
    const { itineraryId, userId, boolean, cityId } = req.body;
    try {
      const itinerary = await Itinerary.findOneAndUpdate(
        { _id:itineraryId },
       !boolean
        ? { $addToSet: { likes: userId }} 
        : { $pull: { likes: userId }},
        { new: true }
        );
        // console.log(boolean)
        // console.log(itinerary)
        // const itineraries = await Itinerary.find({ city:cityId })
      res.json({ success: true, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e.message });
    }
  },
      }


module.exports = itinerariesControllers;