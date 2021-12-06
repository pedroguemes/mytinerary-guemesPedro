import React, { Component } from "react";
import Navheader from "../componentes/Navheader";
import Footer from "../componentes/Footer";

export default class SignIn extends React.Component {
  render() {
    return (
      <>
        <Navheader />
            <div>
                <form>
                      <h1>formulario SIGNIN</h1>  
                </form>
            </div>
        <Footer />
      </>
    );
  }
}
