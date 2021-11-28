import React, { Component } from 'react';
import axios from 'axios';
import Navheader from '../componentes/Navheader';
import Cardcities from '../componentes/Cardcities';
import Footer from '../componentes/Footer';
import imagen from '../assets/logosecundario.png'

 class Cities extends Component {

     constructor (props){
         super (props);
         this.state = {
            arrayCities:[]
            }
    };
    
    
    componentDidMount() {
        axios.get('http://localhost:4000/api/cities')
        .then(res => this.setState({arrayCities:res.data.Response}))
        // .then(res => console.log(res.data))
    }
        // fetch('http://localhost:4000/api/mytinerary/cities')
        // .then(res=>res.json())
        // .then(cities=>this.setState({arraycities:cities.Response.cities}))
        // .catch(err => console.error(err.message))
        


    render(){
        
        console.log(this.state)
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
                    <Cardcities arrayCities={this.state.arrayCities}/>
                </div>
                <Footer/>
            </>
    )
 }
}
export default Cities