import React, { Component, useEffect } from "react";
// import axios from 'axios';
import Navheader from "../componentes/Navheader";
import Cardcities from "../componentes/Cardcities";
import Footer from "../componentes/Footer";
// import Loader from "../componentes/Loader";
import imagen from "../assets/logosecundario.png";
// import ErrorSearch from "../componentes/ErrorSearch";
// import { connect } from "react-redux";
// import citiesActions from "../redux/actions/citiesActions";

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
            {/* <label>
                            <input className="citiesSearch" placeholder="Search Cities :)" type={Text}/>
                         </label> */}
          </div>
          <Cardcities />
        </div>
        <Footer />
      </>
    );
  }
}
