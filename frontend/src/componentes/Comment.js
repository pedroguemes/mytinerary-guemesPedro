import React, {useRef} from "react"
import {connect} from 'react-redux'
// import authActions from "../redux/actions/authActions"

function Comment (props) {

    const {} = props

        return (
        <>
            <div className="contenedorComment">
                
            </div>

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
