import React from "react";
// import axios from "axios";
import Navheader from "../componentes/Navheader";
import Footer from "../componentes/Footer";
// import imagen from '../assets/logocall.png';
import { Link } from "react-router-dom";
import Itinerario from "../componentes/Itinerario";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
// import { withRouter } from '../utils/routes/withRouter';

class City extends React.Component {
  constructor(props) {
    super(props);
  }

  id = this.props.params.id;

  componentDidMount() {
    const { getCity } = this.props;
    getCity(this.id);
   this.props.getItineraries(this.id);   
  }

  render() {
    // console.log(this.props);
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
          {this.props.itineraries.length > 0 && (
    this.props.itineraries.map((itinerary) =>(
      <Itinerario idCity={this.id} nombreCity={this.props.city.nombreCiudad} itinerary={itinerary}/>          
    )))}
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
    itineraries: state.itinerariesReducer.itineraries,
  };
};

const mapDispatchToProps = {
  getCity: citiesActions.getCity,
  getItineraries: itinerariesActions.getItineraries,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
