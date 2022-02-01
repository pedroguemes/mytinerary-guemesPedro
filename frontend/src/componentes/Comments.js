import React, {useEffect, useState} from "react"
import {connect} from 'react-redux'
import CreateComment from "./CreateComment"
import Comment from "./Comment"
// import authActions from "../redux/actions/authActions"
import commentsActions from "../redux/actions/commentsActions"

function Comments (props) {

    const { itineraryId, getComments, commentsReducer, comments, setComments } = props

  //  const [comments, setComments]= useState([])

    // console.log(itineraryId)
    
    useEffect(async() =>{
      let data = await getComments(itineraryId)
     setComments(data.data.comments)
     console.log(data)
    }, []);
    
    
    console.log(comments)

    // const itineraryComments = comments.filter((comment)=>{
    //   return comment.itineraryId[0]._id === itineraryId
    // })
    
    // console.log(itineraryComments)

   if (comments.length > 0){ 
        return (
            <>
                <div className="contenedorComments">
              { comments.map((comment) => (
                    <Comment itineraryId={itineraryId} setComments={setComments} comments={comments} comment={comment}/>
                ) )}
                </div>
                  {/* <CreateComment itineraryId={itineraryId}/> */}
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
      // comments: state.commentsReducer.comments,
    };
  };

  const mapDispatchToProps = {
    getComments: commentsActions.getComments,
  };


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
