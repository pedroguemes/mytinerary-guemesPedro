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
    new Comment(bodyComment).save().then((resp) => Comment.findOne({_id:resp._id}).populate("itineraryId")
    .populate("user")
    .then((resp => res.json({resp})))
    )

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
      if(modifyComment){
        res.json({success:true, response:modifyComment.comments})
    }else{
        throw new Error()
    }
    } catch (error) {}
    res.json({ success: modifyComment ? true : false });
  },

  deleteComment:async (req, res) => {
    let comment;
    const _id = req.params.commentId;
    console.log(req.params.commentId)
    try {
      comment = await Comment.findOneAndDelete({
        _id:_id,
      });
      return Comment.find()
      .then((comments) => res.json({ comments }));
    } catch (error) {
      console.log(error);
    }
    res.json({ response:comments, success:true });
  },

  obtenerCommentsPorItinerary: (req, res) => {
    Comment.find({ itineraryId: req.params.itineraryId })
      .populate("itineraryId")
      .populate("user")
      .then((comments) => res.json({ comments }));
     },
};

module.exports = commentsControllers;
