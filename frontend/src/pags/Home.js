import React, { Component } from 'react';
import Navheader from '../componentes/Navheader';
import Herowelcome from '../componentes/Herowelcome';
import Calltoaction from '../componentes/Calltoaction';
import Divcarousel from '../componentes/Carousel';
import Footer from '../componentes/Footer';



export default class Home extends React.Component {

    render(){
    return (
        <>
        <Navheader/>
        <Herowelcome/>
        <Calltoaction/>
        <h1 className="mostpop">Most popular Mytineraries</h1>
        <Divcarousel/>
        <Footer/>
        </>
    )
 }
}
