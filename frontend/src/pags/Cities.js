import React, { Component, useEffect } from "react";
import Navheader from "../componentes/Navheader";
import Cardcities from "../componentes/Cardcities";
import Footer from "../componentes/Footer";
// import Loader from "../componentes/Loader";
import imagen from "../assets/logosecundario.png";

export default class Cities extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Navheader />
        <div className="citiesbody">
          <div className="portadacities">
            <img src={imagen} alt="imgportadacities" />
          </div>
          <Cardcities/>
        </div>
        <Footer />
      </>
    );
  }
}
