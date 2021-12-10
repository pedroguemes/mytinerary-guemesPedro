import React from "react"
import {useRef} from "react"
import {connect} from 'react-redux'
import authActions from "../redux/actions/authActions";



function SignInForm (props) {

    const {signIn, loggedUser} = props

    const inputUserMail = useRef()
    const inputPassword = useRef()

    
    const handleSubmit = async (userMail, password) => {
        const errores = await signIn(userMail, password);
        console.log(errores)
    }
    
    const handleInputsSubmit  = (e)=> {        
        e.preventDefault()
        handleSubmit(inputUserMail,inputPassword)
        
        inputUserMail.current.value ="";
        inputPassword.current.value ="";
        
    }
    
    return (
        <>
        {console.log(loggedUser)}
                <form onSubmit={handleInputsSubmit}>
                <div>
                    <input type="text" ref={inputUserMail} name="userMail" placeholder="Your Mail" />
                </div>
                <div>
                    <input type="password" ref={inputPassword} name="password" placeholder="Password"/>
                </div>
                </form>
                <div className="formButtons">
                        <button type="submit">Sign in</button>
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
    signIn: authActions.cargarSignIn,
  };

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
