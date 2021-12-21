import React, { useRef } from "react";
import { connect } from "react-redux";
import commentsActions from "../redux/actions/commentsActions";

function CreateComment(props) {
  const { itineraryId, loggedUser, postComment } = props;

  const handleSubmitInputs = (e) => {
    e.preventDefault();
    const newComment = {
      itineraryId: itineraryId,
      comment: commentRef.current.value,
      user: loggedUser._id,
    };
    postComment(newComment);
  };

  const commentRef = useRef();

  if (!loggedUser) {
    return null;
  }

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
