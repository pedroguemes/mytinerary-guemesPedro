// import axios from "axios";
import React from "react";
import Navheader from "../componentes/Navheader";
import Footer from "../componentes/Footer";
import SignUpForm from "../componentes/SignUpForm";

export default class SignUp extends React.Component {
 
  render() {
    return (
      <>
        <Navheader/>
        <SignUpForm/>
        <Footer/>
      </>
    );
  }
}
