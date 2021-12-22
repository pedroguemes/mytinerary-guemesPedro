import React, { useRef } from "react";
import { connect } from "react-redux";
import commentsActions from "../redux/actions/commentsActions";
import Swal from 'sweetalert2'



const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})



function CreateComment(props) {
  const { itineraryId, loggedUser, postComment } = props;
  // console.log(loggedUser)

  const handleSubmitInputs = (e) => {
    e.preventDefault();
   if(loggedUser._id){
    const newComment = {
      itineraryId: itineraryId,
      comment: commentRef.current.value,
      user: loggedUser._id,
    };
    
    postComment(newComment);
         }else{
          Toast.fire({
            icon: 'error',
            title: 'You must be logged to comment this post!'
          })  
         }
  };

  const commentRef = useRef();

 

  return (
    <>
      <div className="contenedorCommentInput">
        <form onSubmit={handleSubmitInputs}>
          <textarea
            className="textareaComment"
            placeholder="comment"
            ref={commentRef}
          ></textarea>
          <button className="sendComment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-up-circle"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ff9300"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <line x1="12" y1="8" x2="8" y2="12" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="16" y1="12" x2="12" y2="8" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
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
