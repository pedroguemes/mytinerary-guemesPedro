import React, { Component } from 'react';
import Navheader from '../componentes/Navheader';
import Cardcities from '../componentes/Cardcities';
import Footer from '../componentes/Footer';
import imagen from '../assets/logocallto.png';


export default class City extends React.Component {

    constructor (props){
        super (props);
        this.state = {
            arraycities:[]
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:4000/api/mytinerary/cities')
        .then(res=>res.json())
        .then(cities=>this.setState({arraycities:cities.Response.cities}))
        .catch(err => console.error(err.message))
    }

    render(){
    
        // this.state=[];
        
        return (
            <>
                <Navheader/>
                <div className="citiesbody">
                    <div className="portadacities"> <img  src={imagen}/></div>
                    <Cardcities arraycities={this.state.arraycities}/>
                </div>
                <Footer/>
            </>
    )
 }
}
