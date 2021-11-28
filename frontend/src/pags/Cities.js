import React, { Component } from 'react';
import axios from 'axios';
import Navheader from '../componentes/Navheader';
import Cardcities from '../componentes/Cardcities';
import Footer from '../componentes/Footer';
import imagen from '../assets/logosecundario.png'

export default class Cities extends React.Component {

    constructor (props){
        super (props);
        this.setState = {
            arrayCities : []
        };
    }
    
    componentDidMount() {
        // fetch('http://localhost:4000/api/mytinerary/cities')
        // .then(res=>res.json())
        // .then(cities=>this.setState({arraycities:cities.Response.cities}))
        // .catch(err => console.error(err.message))
        axios.get('http://localhost:4000/api/cities')
             .then(res => this.setState(arrayCities.res.cities))

    }

    render(){
        
        // this.handleChan  

        // this.state=[];
        
        return (
            <>
                <Navheader/>
                <div className="citiesbody">
                    <div className="portadacities"> 
                    <img  src={imagen}/>
                        {/* <label>
                            <input className="citiesSearch" placeholder="Search Cities :)" type={Text}/>
                         </label> */}
                    </div>
                    <Cardcities arraycities={this.state.arrayCities}/>
                </div>
                <Footer/>
            </>
    )
 }
}
