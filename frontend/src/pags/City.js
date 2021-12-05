import React, { Component } from "react";
import axios from "axios";
import Navheader from "../componentes/Navheader";
import Footer from "../componentes/Footer";
// import imagen from '../assets/logocall.png';
import { Link } from "react-router-dom";
import Itinerario from "../componentes/Itinerario";
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
// import { withRouter } from '../utils/routes/withRouter';

class City extends React.Component {
  
  constructor(props) {
    
    super(props);
    
    // const {itineraries, getItineraries} = this.props
  }
  
  // endpoint = this.props.params.endpoint
  // id = this.props.params.id
  
  id = this.props.params.id;
  
  componentDidMount() {
    
    const  {getCity} = this.props
    getCity(this.id)
    // console.log(this.props.params);
    // console.log(window.location.href);
    // console.log(id);
    
    // this.props.getItineraries()
    // console.log(this.props.itineraries)

    // axios
    //   .get(`http://localhost:4000/api/cities/${id}`)
    //   .then((res) => this.setState({ city: res.data.city }));
    // .then(res =>console.log({city:res.data.city}))
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
          
            <Itinerario idCity={this.id}/>
          
          <div className="backtocitiesdiv">
            <Link className="backtocities" to={"/cities"}>
              Back to Cities
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
    return {
        city: state.citiesReducer.city
    }
}

const mapDispatchToProps = {
    getCity: citiesActions.getCity
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
