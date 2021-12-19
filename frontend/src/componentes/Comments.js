import React, {useEffect} from "react"
import {connect} from 'react-redux'
import CreateComment from "./CreateComment"
import Comment from "./Comment"
// import authActions from "../redux/actions/authActions"
import commentsActions from "../redux/actions/commentsActions"

function Comments (props) {

    const { itineraryId, getComments } = props

      console.log(getComments)

    useEffect(() => getComments(itineraryId._id), []);


        return (
            <>
                <div className="contenedorComments">
              { comments.map((comment) => (
                    <Comment comment={comments}/>
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
