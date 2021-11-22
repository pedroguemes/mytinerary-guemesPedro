import React from "react";
// import logowelcome from '../assets/logowelcome.png';
import calltowelcome from '../assets/calltowelcome.png';
// import {Nav, Navbar, NavDropdown} from 'react-bootstrap';


export default function Herowelcome(){
    return (
        <div>
             <div className="herowelcome container-fluid p-5">
        {/* <img className="img-fluid p-5 logoWelcome" src={logowelcome} alt="logo"/> */}
        <a href="#"><img className="img-fluid p-5 logoWelcome" src={calltowelcome} alt="logo"/></a>
        <h3 className="container-fluid text-center text-light">"Find your perfect trip, designed by insiders who know and love their <a className="linkwelcome" href="">cities</a>"</h3>
      </div>
        </div>
    )
}