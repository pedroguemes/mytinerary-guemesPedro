import React from "react";
import {Carousel, Card, Row, Col} from 'react-bootstrap';
// import  singapore from '../assets/singapore.jfif'
// import  dubai from '../assets/dubai.jfif'
// import  macau from '../assets/macau.jpg'
// import  bangkok from '../assets/bangkok.jpg'
// import  newyork from '../assets/newyork.jfif'
// import  kualalumpur from '../assets/kualalumpur.jfif'
// import  paris from '../assets/paris.jfif'
// import  valijaciudad from '../assets/valijaciudad.jpg'


let arrayCiudades =[

    [
    {nombreCiudad:"Kuala Lumpur", pais:"Malaysia", imagenCiudad: require("../assets/kualalumpur.jfif").default},
    {nombreCiudad:"Paris", pais:"France", imagenCiudad:require("../assets/paris.jfif").default},
    {nombreCiudad:"New York", pais:"United States", imagenCiudad:require("../assets/newyork.jfif").default},
    {nombreCiudad:"Singapore Harbour", pais:"Singapore", imagenCiudad: require("../assets/singapore.jfif").default}],

    
    [
    {nombreCiudad:"Dubai", pais:"United Arab Emirates", imagenCiudad:require("../assets/dubai.jfif").default},
    {nombreCiudad:"Macau", pais:"China", imagenCiudad:require("../assets/macau.jpg").default},
    {nombreCiudad:"Bangkok", pais:"Thailand", imagenCiudad: require("../assets/bangkok.jfif").default},
    {nombreCiudad:"Buenos Aires", pais:"Argentina", imagenCiudad: require("../assets/buenosaires.jpg").default}],
        
    [
    {nombreCiudad:"Sydney", pais:"Australia", imagenCiudad: require("../assets/sydney.jfif").default},
    {nombreCiudad:"London", pais:"England", imagenCiudad:require("../assets/london.jfif").default},
    {nombreCiudad:"Berlin", pais:"Germany", imagenCiudad:require("../assets/berlin.jfif").default},
    {nombreCiudad:"New Delhi", pais:"India", imagenCiudad: require("../assets/newdelhi.jfif").default}]

]


export default function Divcarousel () {
    return (
            <Carousel className="carousel">
                    <Carousel.Item>
                          <Row xs={1} md={2} className="g-4">
                                {arrayCiudades[0].map((array, idx) => (
                                  <Col>
                                  <a href="#"> 
                                       <Card className="cardcarousel">
                                           <Card.Img className="imagencard" variant="top" src={array.imagenCiudad} />
                                           <Card.Body>
                                           <Card.Title>{array.nombreCiudad}</Card.Title>
                                           <Card.Title>{array.pais}</Card.Title>
                                           <Card.Text>
                                           
                                           </Card.Text>
                                           </Card.Body>
                                       </Card>
                                  </a>
                               </Col>
                                ))}
                         </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                          <Row xs={1} md={2} className="g-4">
                                {arrayCiudades[1].map((array, idx) => (
                                    <Col>
                                        <a href="#">
                                            <Card className="cardcarousel">
                                                <Card.Img className="imagencard" variant="top" src={array.imagenCiudad} />
                                                <Card.Body>
                                                <Card.Title>{array.nombreCiudad}</Card.Title>
                                                <Card.Title>{array.pais}</Card.Title>
                                                <Card.Text>
                                                
                                                </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </a>
                                    </Col>
                                ))}
                         </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                          <Row xs={1} md={2} className="g-4">
                                {arrayCiudades[2].map((array, idx) => (
                                    <Col>
                                       <a href="#"> 
                                            <Card className="cardcarousel">
                                                <Card.Img className="imagencard" variant="top" src={array.imagenCiudad} />
                                                <Card.Body>
                                                <Card.Title>{array.nombreCiudad}</Card.Title>
                                                <Card.Title>{array.pais}</Card.Title>
                                                <Card.Text>
                                                
                                                </Card.Text>
                                                </Card.Body>
                                            </Card>
                                       </a>
                                    </Col>
                                ))}
                         </Row>
                    </Carousel.Item>
            </Carousel>
       
    )
}
