import React, { Component } from "react";
import axios from "axios";
import Navheader from "../componentes/Navheader";
import Footer from "../componentes/Footer";
// import imagen from '../assets/logocall.png';
import { Link } from "react-router-dom";
import Itinerario from "../componentes/Itinerario";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
// import { withRouter } from '../utils/routes/withRouter';

class City extends React.Component {
  constructor(props) {
    super(props);
  }

  id = this.props.params.id;

  componentDidMount() {
    const { getCity } = this.props;
    getCity(this.id);
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Navheader />
        <div className="citybody">
          <div className="portadacity">
            <div className="containerTituloPortada">
              <h2>{this.props.city.nombreCiudad}</h2>
              <h2>{this.props.city.pais}</h2>
            </div>
            <img src={this.props.city.imagenCiudad} alt="imagen city" />
          </div>
          <Itinerario idCity={this.id} />
          <div className="backtocitiesdiv">
            <Link className="backtocities" to={"/cities"}>
              Back to Cities ⬅
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.citiesReducer.city,
  };
};

const mapDispatchToProps = {
  getCity: citiesActions.getCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
