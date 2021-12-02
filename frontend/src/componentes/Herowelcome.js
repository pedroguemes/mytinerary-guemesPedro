import React from "react";
import logowelcome from '../assets/logowelcome.png';
import {Link} from 'react-router-dom'

export default function Herowelcome(){
    return (
             <div className="herowelcome p-5">
                <img className="img-fluid p-5 logoWelcome" src={logowelcome} alt="logo"/>
                <h3 className="container-fluid text-center text-light">"Find your perfect trip, designed by insiders who know and love their <Link to={'/cities'} className="linkwelcome" href=""> cities </Link>"</h3>
             </div>
    )
}