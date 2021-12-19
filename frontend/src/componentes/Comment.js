import React, {useState, useRef} from "react"
import {connect} from 'react-redux'
import { BsPersonCircle } from "react-icons/bs";

// import authActions from "../redux/actions/authActions"
function Comment (props) {
  
  const [editing, setEditing]= useState(false)
  
const textAreaRef = useRef()

    const {comment} = props
    console.log(comment.user)
        return (
        <>
        { editing ? 
        <>
          <form>
              <textarea ref={textAreaRef}>{comment.comment}</textarea>
              <button type="submit" ></button>
            </form>
        </>
      : 
      <div className="contenedorComment">
               <p>{comment.comment}</p>
               {/* ternario usuario ==usuario creador del cometn entonces boton existe */}
              <button onClick={()=>setEditing(true)}>editar</button>
            </div>}
 
        </>

    )
}



const mapStateToProps = (state) => {
    return {
    //   loggedUser: state.authReducer.user,
    };
  };

  const mapDispatchToProps = {
    // signIn: authActions.cargarSignIn,
  };


export default connect(mapStateToProps, mapDispatchToProps)(Comment);


{/* <img src={!!comment ? comment.user[0].imagenUser:"BsPersonCircle" }/> */}