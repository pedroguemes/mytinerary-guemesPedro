import React from "react";
import {Card} from 'react-bootstrap';
import imagen from '../assets/logocall.png'


export default function Cardcities (props) {

    // console.log(props.arraycities[0])
    // console.log(props.arraycities.imagenCiudad)

    return (
        <>
                {props.arraycities.map(   
                    (city) => (    
            <Card className="cardcities">
                    <Card.Img
                        variant="top"
                        className="imagencard" variant="top"
                        src={city.imagenCiudad}/>
                <Card.Body>
                <Card.Title>{city.nombreCiudad}</Card.Title>
                <Card.Title>{city.pais}</Card.Title>
                </Card.Body>
            </Card>
        
                 ) )}
       </>
        )
    }


    {/* <Card className="cardcities">
            <Card.Img
                variant="top"
                className="imagencard" variant="top"
                src={imagen}/>
         <Card.Body>
         <Card.Title>cardtitle</Card.Title>
         <Card.Title>cardtitle</Card.Title>
        </Card.Body>
     </Card> */}