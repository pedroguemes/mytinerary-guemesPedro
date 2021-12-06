import React, { Component } from "react";
import Navheader from "../componentes/Navheader";
import Footer from "../componentes/Footer";
import CalltoSign from "../componentes/CalltoSign";
import {Link} from 'react-router-dom'

export default class SignIn extends React.Component {
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
                <form>
                        <div>
                            <input type="text" name="userName" placeholder="Username" />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password"/>
                        </div>
                    </form>
                    <div className="formButtons">
                        <button >Sign in</button>
                    </div>
                    <div>
                        <p>Not a member?, <Link to="/signup">Sign Up !</Link></p>
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
