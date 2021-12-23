import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { BsPersonCircle } from "react-icons/bs";
import authActions from "../redux/actions/authActions"
import commentsActions from "../redux/actions/commentsActions"
function Comment(props) {
  const [editing, setEditing] = useState(false);
  // const [myComment, setMyComment] = useState();
 
  const textAreaRef = useRef();
  
  const { comment, deleteComment, modifyComment, loggedUser, getComments, itineraryId} = props;
  // console.log(comment);
  // console.log(comment.user[0]);
  // console.log(comment.user[0].firstName);
  // console.log(comment.user[0].lastName);

  function deleteHandler(){
    const token = localStorage.getItem('token')
    deleteComment( token, comment._id)
  }

  
  function handleModify(e){
    const token = localStorage.getItem('token')
    e.preventDefault()
    let commentId=comment._id
    modifyComment(commentId, textAreaRef.current.value, token)
  }

  // if(comment.user[0]._id === loggedUser._id){setMyComment(true)}else{setMyComment(false)}


  return (
    <>
      {editing ? (
        <>
          <form className="editCommentForm" onSubmit={(e)=>handleModify(e)}>
            <textarea ref={textAreaRef}>{comment.comment}</textarea>
            <button className="editCommentButton" type="submit"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l5 5l10 -10" />
          </svg></button>
            <button className="cancelEditCommentButton" onClick={() => setEditing(false)}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
            </svg><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg></button>
          </form>
        </>
      ) : (
        <div className="contenedorContenedorComment">
          {/* <div  className={{myComment:true ? "myCommentClass" : "contenedorComment" }}> */}
          <div  className="contenedorComment">
              <div className="commentComment">
            <div className="contenedorUserComment">
              <img
                className="imagenUserComment"
                src={!!comment ? comment.user[0].imagenUser : BsPersonCircle}
              />
              <p>{`${comment.user[0].firstName}  ${comment.user[0].lastName}:`}</p>
            </div>
            <p>{comment.comment}</p>
            </div>
            {/* ternario usuario ==usuario creador del cometn entonces boton existe */}
            
            <div className={comment.user[0]._id === loggedUser._id ? "divButtons": "divButtonsHidden"}>
              <button onClick={() => setEditing(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-edit"
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
                  <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                  <line x1="16" y1="5" x2="19" y2="8" />
                </svg>
              </button>
              <button onClick={deleteHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-trash"
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
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
      loggedUser: state.authReducer.user,
  };
};

const mapDispatchToProps = {
  getComments: commentsActions.getComments,
  deleteComment: commentsActions.deleteComment,
  modifyComment: commentsActions.modifyComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
