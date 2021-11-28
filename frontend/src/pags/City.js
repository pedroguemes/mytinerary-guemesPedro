import React, { Component } from 'react';
import Navheader from '../componentes/Navheader';
import Cardcities from '../componentes/Cardcities';
import Footer from '../componentes/Footer';
import imagen from '../assets/logocall.png';
import {Link} from 'react-router-dom'


export default class City extends React.Component {

    constructor (props){
        super (props);
        this.state = {
            arrayCities:[]
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:4000/api/cities')
        .then(res=>res.json())
        .then(cities=>this.setState({arrayCities:cities.Response.cities}))
        .catch(err => console.error(err.message))
    }

    render(){
            
        return (
            <>
                <Navheader/>
                <div className="citybody">
                    <div className="portadacity"> <img  src={imagen}/></div>
                    {/* <Cardcities arraycities={this.state.arraycities}/> */}
                    <h1>Sorry, site under mantaineance</h1>
                    <Link to={'/Cities'}>Back to Cities</Link>
                </div>
                <Footer/>
            </>
    )
 }
}
