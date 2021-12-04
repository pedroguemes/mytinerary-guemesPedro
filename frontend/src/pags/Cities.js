import React, { Component, useEffect } from 'react';
// import axios from 'axios';
import Navheader from '../componentes/Navheader';
import Cardcities from '../componentes/Cardcities';
import Footer from '../componentes/Footer';
import Loader from '../componentes/Loader'
import imagen from '../assets/logosecundario.png';
import ErrorSearch from '../componentes/ErrorSearch';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';


 export default class Cities extends Component {

     constructor (props){
         super (props);
    };
  

     // componentDidMount() {
    //     axios.get('http://localhost:4000/api/cities')
    //     .then(res => this.setState({arrayCities:res.data.cities}))
        // .then(res => console.log(res.data))
    // }
        // fetch('http://localhost:4000/api/mytinerary/cities')
        // .then(res=>res.json())
        // .then(cities=>this.setState({arraycities:cities.Response.cities}))
        // .catch(err => console.error(err.message))
        


    render() {
        
        return (
            <>
                <Navheader/>
                <div className="citiesbody">
                    <div className="portadacities"> 
                    <img  src={imagen} alt='imgportadacities'/>
                        {/* <label>
                            <input className="citiesSearch" placeholder="Search Cities :)" type={Text}/>
                         </label> */}
                    </div>
                    <Cardcities/>
                </div>
                <Footer/>
            </>
    )
 }
}

