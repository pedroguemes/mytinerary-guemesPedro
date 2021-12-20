const Activity = require("../models/Activity");

const activitiesControllers = {
  obtenerActivities: (req, res) => {
    Activity.find()
      .populate("itineraryId")
      .then((activities) => res.json({ activities }));
  },
  
  cargarActivity: (req, res) => {
    const bodyActivity = req.body;
    new Activity(bodyActivity).save().then((resp) => res.json({ resp }));
  },

  obtenerActivity: (req, res) => {
    Activity.findOne({ _id: req.params.id })
      .populate("itineraryId")
      .then((activity) => res.json({ activity }));
  },

  modificarActivity: async (req, res) => {
    const bodyActivity = req.body;
    let modifyActivity;
    try {
      modifyActivity = await Activity.findOneAndUpdate(
        { _id: req.params.id },
        bodyActivity,
        { new: true }
      );
    } catch (error) {}
    res.json({ success: modifyActivity ? true : false });
  },

  borrarActivity: async (req, res) => {
    let activity;
    const id = req.params.id;
    try {
      activity = await Activity.findOneAndDelete({
        _id: id,
      });
    } catch (error) {
      console.log(error);
    }
    res.json({ response: activity, success: true });
  },

  obtenerActivityPorItinerary: (req, res) => {
    Activity.find({ itineraryId:req.params.itineraryId })
      .populate("itineraryId")
      .then((activities) => res.json({ activities }));
  },
};

module.exports = activitiesControllers;
// obtenerCommentsPorItinerary: (req, res) => {
//   Comment.find({ itineraryId: req.params.itineraryId })
//     .populate("itineraryId")
//     .populate("user")
//     .then((comments) => res.json({ comments }));
//    },