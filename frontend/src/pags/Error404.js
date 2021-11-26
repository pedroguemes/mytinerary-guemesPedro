import React, { Component } from 'react';
import Navheader from '../componentes/Navheader';
// import logocall from '../assets/logocall'

export default class Error404 extends React.Component {

    render(){
    return (
        <>
        <Navheader/>
        {/* <img src={logocall}/> */}
        <h1>Sorry, "..Error404, not found."</h1>
        </>
    )
 }
}
