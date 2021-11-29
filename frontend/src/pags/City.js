import React, { Component } from 'react';
import axios from 'axios';
import Navheader from '../componentes/Navheader';
import Cardcities from '../componentes/Cardcities';
import Footer from '../componentes/Footer';
import imagen from '../assets/logocall.png';
import {Link} from 'react-router-dom'


class City extends React.Component {

    constructor (props){
        super (props);
        this.state = {
           city:{}
           }
    };
    
    componentDidMount() {
        // console.log(props.match.params.id);
        // console.log(window.location.href);
        const id = window.location.href.split("/").pop()
        // console.log(id);
        
        axios.get(`http://localhost:4000/api/cities/${id}`)
        .then(res =>this.setState({city:res.data.city}))
    }
    
    render(){
        
        // console.log(this.state);
        return (
            <>
                <Navheader/>
                <div className="citybody">
                    <div className="portadacity">
                     <img  src={this.state.city.imagenCiudad} alt={'imagen city'}/>
                        <h2>{this.state.city.nombreCiudad}</h2>
                        <h2>{this.state.city.pais}</h2>
                     </div>
                    <h1>Sorry, site under mantaineance</h1>
                    <Link to={'/cities'}>Back to Cities</Link>
                </div>
                <Footer/>
            </>
    )
 }
}

export default City