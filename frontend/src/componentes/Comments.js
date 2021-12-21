import React, {useEffect} from "react"
import {connect} from 'react-redux'
import CreateComment from "./CreateComment"
import Comment from "./Comment"
// import authActions from "../redux/actions/authActions"
import commentsActions from "../redux/actions/commentsActions"

function Comments (props) {

    const { itineraryId, getComments, comments } = props

    // console.log(itineraryId)
    
    useEffect(() => getComments(itineraryId), []);
    
    // console.log(comments)
    
    const itineraryComments = comments.filter((comment)=>{
      return comment.itineraryId[0]._id === itineraryId
    })
    
    // console.log(itineraryComments)

   if (itineraryComments.length > 0){ 
        return (
            <>
                <div className="contenedorComments">
              { itineraryComments.map((comment) => (
                    <Comment comment={comment}/>
                ) )}
                </div>
                  <CreateComment itineraryId={itineraryId}/>
            </>

    )}else{
        return (
            <>
              <h6 className="noComments">No comments yet.</h6>
            </>

    )}
}



const mapStateToProps = (state) => {
    return {
      comments: state.commentsReducer.comments,
    };
  };

  const mapDispatchToProps = {
    getComments: commentsActions.getComments,
  };


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
