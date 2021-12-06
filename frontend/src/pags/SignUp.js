import React, { Component } from "react";
import Navheader from "../componentes/Navheader";
import Footer from "../componentes/Footer";
import CalltoSign from "../componentes/CalltoSign";

export default class SignUp extends React.Component {
  render() {
    return (
      <>
        <Navheader/>
          <div className="formcontainer">
        <CalltoSign/>
             {/* <div>
                  <p>hola</p>
             </div> */}
             <div className="formsignup">
             <div className="containerinterno">
             {/* <div>
                  <p>hola</p>
             </div> */}
             <div>
                <form>
                        <div>
                            <input type="text" name="firstName" placeholder="First name" />
                        </div>
                        <div>
                            <input type="text" name="lastName" placeholder="Last name" />
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password"/>
                        </div>
                        <div>
                            <input type="url" name="profilePhoto" placeholder="Url profile picture" />
                        </div>
                        <div>
                            <select type="text" name="country" placeholder="Choose your country">
                                <option>Choose your country</option>
                                {/* {countries.map(country => <option key={country.name}>{country.name}</option>)} */}
                            </select>
                        </div>
                    </form>
                    <div className="formButtons">
                        <button >Create account</button>
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
