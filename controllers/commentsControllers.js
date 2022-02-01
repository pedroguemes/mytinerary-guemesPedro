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
    new Comment(bodyComment).save() 
    .then(response=>{
      Comment.find({ itineraryId: req.body.itineraryId })
      .populate("itineraryId")
      .populate("user")  
      .then((comments => res.json({comments})))
    })
  },
  
  obtenerComment: (req, res) => {
    Comment.findOne({ _id: req.params.id })
      .populate("itineraryId")
      .then((comment) => res.json({ comment }));
  },

  modifyComment: async (req, res) => {
    
    // console.log("controller");
    // const modifiedComment = req.body.modifiedComment;
    // console.log(req)
    let modifyComment;
    try {
      modifyComment = await Comment.findOneAndUpdate(
        { _id: req.params.commentId, },
        {comment: req.body.modifiedComment,},
        { new: true, }
      );
      // console.log(modifyComment)
      if(modifyComment){
      return  Comment.find({ itineraryId: req.body.itineraryId })
      .populate("itineraryId")
      .populate("user")
        .then((comments) => res.json({ comments }));
        }else{
              throw new Error()
          }
        } catch (error) {}
        res.json({ response:modifyComment, success:true });
  },

  deleteComment:async (req, res) => {
    let comment;
    const _id = req.params.commentId;
    // console.log(req.params.commentId)
    try {
      comment = await Comment.findOneAndDelete({
        _id:_id,
      });
      return  Comment.find({ itineraryId: req.params.itineraryId })
      .populate("itineraryId")
      .populate("user")     
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
