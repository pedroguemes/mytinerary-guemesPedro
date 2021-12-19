import React, { useRef } from "react"
import {connect} from 'react-redux'
import commentsActions from "../redux/actions/commentsActions"

function CreateComment (props) {
    
    const {itineraryId, loggedUser, postComment} = props

    const handleSubmitInputs = (e)=> {
        e.preventDefault()
    const  newComment ={ 
        itineraryId:itineraryId,
        comment: commentRef.current.value,
        user: loggedUser._id
    }
        postComment(newComment)
          
    }

    const commentRef = useRef()

        if (!loggedUser){
          return  null
        }

        return (
        <>
            <div className="contenedorComment">
                <form onSubmit={handleSubmitInputs}>
                    <textarea ref={commentRef}></textarea>
                    <button>🔼</button>
                </form>
            </div>
        </>

    )
}



const mapStateToProps = (state) => {
    return {
      loggedUser: state.authReducer.user,
    };
  };

  const mapDispatchToProps = {
    postComment: commentsActions.postComment,
  };


export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
