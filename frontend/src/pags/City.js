import React, { Component } from 'react';
import axios from 'axios';
import Navheader from '../componentes/Navheader';
import Footer from '../componentes/Footer';
import imagen from '../assets/logocall.png';
import {Link} from 'react-router-dom'
// import { withRouter } from '../utils/routes/withRouter';


class City extends React.Component {

    constructor (props){
        super (props);
        this.state = {
           city:{_id:0}
           }
    };
    
    // endpoint = this.props.params.endpoint
    // id = this.props.params.id

    componentDidMount() {

        const id = window.location.href.split("/").pop()
        // const id = req.params.id
        // console.log(props.match.params.id);
        // console.log(window.location.href);
        // console.log(id);

        axios.get(`http://localhost:4000/api/cities/${id}`)
        .then(res =>this.setState({city:res.data.city}))
        // .then(res =>console.log({city:res.data.city}))
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
                    <h3>Sorry, site under mantaineance</h3>
                     </div>
                     <div>
                        <Link className='backtocities' to={'/cities'}>Back to Cities</Link>
                    </div>
                </div>
                {/* <Footer/> */}
            </>
    )
 }
}

export default City