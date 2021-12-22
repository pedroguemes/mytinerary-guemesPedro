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

  modifyComment: async (req, res) => {
    const bodyComment = req.body;
    let modifyComment;
    try {
      modifyComment = await Comment.findOneAndUpdate(
        { _id: req.params.id },
       comment,
        { new: true }
      );
    } catch (error) {}
    res.json({ success: modifyComment ? true : false });
  },

  deleteComment: async (req, res) => {
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
    Comment.find({ itineraryId: req.params.itineraryId })
      .populate("itineraryId")
      .populate("user")
      .then((comments) => res.json({ comments }));
     },
};

module.exports = commentsControllers;
