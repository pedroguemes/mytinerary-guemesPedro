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

    const itineraryComment = comments.filter((comment)=>{
      return comment.itineraryId[0]._id === itineraryId
    })

        return (
            <>
                <div className="contenedorComments">
              { itineraryComment.map((comment) => (
                    <Comment comment={comment}/>
                ) )}
                </div>
                  <CreateComment itineraryId={itineraryId}/>
            </>

    )
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
