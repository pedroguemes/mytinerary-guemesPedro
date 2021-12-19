import React, {useRef} from "react"
import {connect} from 'react-redux'
import CreateComment from "./CreateComment"
import Comment from "./Comment"
// import authActions from "../redux/actions/authActions"

function Comments (props) {

    const { itineraryId } = props

        return (
            <>
                <div className="contenedorComments">
              {/* { comments.map((comment) => (
                    <Comment/>
                ) )} */}
                </div>
                  <CreateComment itineraryId={itineraryId}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
