import React from "react";
// import logocallto from '../assets/logocallto.png';
// import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Calltoaction(){
    return (
        <div className="contenedorcallto">
                <div className="calltoaction ">
                       {/* <img className="logocall" src={logocallto} alt="logocall"/> */}
                        <Button as={Link} to='/Cities' className="buttoncallto"> Click and explore! :) </Button>
                </div>

         </div>
    )
}