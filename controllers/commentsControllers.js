const Comment = require("../models/Comment");

const commentsControllers = {
  obtenerComments: (req, res) => {
    Comment.find()
    .populate("itineraryId")
    .populate("user")
      .then((comments) => res.json({ comments }));
  },
  
  cargarComment: (req, res) => {
    const bodyComment = req.body;
    new Comment(bodyComment).save().then((resp) => res.json({ resp }));
  },
  
  obtenerComment: (req, res) => {
    Comment.findOne({ _id: req.params.id })
      .populate("itineraryId")
      .then((comment) => res.json({ comment }));
  },

  modificarComment: async (req, res) => {
    const bodyComment = req.body;
    let modifyComment;
    try {
      modifyComment = await Comment.findOneAndUpdate(
        { _id: req.params.id },
        bodyComment,
        { new: true }
      );
    } catch (error) {}
    res.json({ success: modifyComment ? true : false });
  },

  borrarComment: async (req, res) => {
    let comment;
    const id = req.params.id;
    try {
      comment = await Comment.findOneAndDelete({
        _id: id,
      });
    } catch (error) {
      console.log(error);
    }
    res.json({ response: comment, success: true });
  },

  obtenerCommentsPorItinerary: (req, res) => {
    Comment.find({ itinerary: req.params.itineraryId })
      .populate("itineraryId")
      .populate("user")
      .then((comments) => res.json({ comments }));
      console.log(res.comments)
  },
};

module.exports = commentsControllers;
