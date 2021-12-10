import React, { Component } from "react";
import {connect} from 'react-redux'
import Navheader from "../componentes/Navheader";
import Footer from "../componentes/Footer";
import SignInForm from "../componentes/SignInForm";
import CalltoSign from "../componentes/CalltoSign";
import {Link} from 'react-router-dom'

 class SignIn extends React.Component {
  render() {
    return (
      <>
        <Navheader/>
          <div className="formcontainerIn">
             {/* <div>
                  <p>hola</p>
             </div> */}
             <div className="formsignin">
             <div className="containerinternoIn">
             <div>
                <p>Welcome back! :)</p>
             </div>
             <div>
                    {/* <form>
                        <div>
                            <input type="text" name="userName" placeholder="Username" />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password"/>
                        </div>
                    </form> */}
                    <SignInForm />
                    
                    <div>
                        <p>Not a member?, <Link className="tosignup" to="/signup">Sign Up !</Link></p>
                    </div>
             </div>
             </div>
            </div>
          </div>
        <Footer />
      </>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    newUser: state.authReducer.user,
  };
};




export default connect(mapStateToProps, null)(SignIn);
