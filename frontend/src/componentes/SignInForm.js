import React, {useRef} from "react"
import {connect} from 'react-redux'
import authActions from "../redux/actions/authActions"
import GoogleLogin from 'react-google-login'

function SignInForm (props) {

    const {signIn, loggedUser} = props

    const inputUserMail = useRef()
    const inputPassword = useRef()

    const responseGoogle = (res) => {
      console.log(res);
      props.signIn(res.profileObj.email, res.profileObj.googleId, true)
  }

    const handleSubmit = (userMail, password) => {
        const errores =  signIn(userMail, password);
        console.log(errores)
    }
    
    const handleInputsSubmit  = (e)=> {        
        e.preventDefault()
        handleSubmit(inputUserMail.current.value,inputPassword.current.value)
        
        inputUserMail.current.value ="";
        inputPassword.current.value ="";
        
    }
    
    return (
        <>

                <form onSubmit={handleInputsSubmit}>
                <div>
                    <input type="text" ref={inputUserMail} name="userMail" placeholder="Your Mail" />
                </div>
                <div>
                    <input type="password" ref={inputPassword} name="password" placeholder="Password"/>
                </div>
                <div>
                        <button type="submit">Sign in</button>
                </div>
                <GoogleLogin className="formButtons"
                clientId="378148122283-d1dapvv0m2ni54j49ol1pk2qbgdoqnms.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'} />
                                </form>
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
// export default SignInForm;
