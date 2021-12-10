import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";

let arrayCiudades = [
  [
    {
      nombreCiudad: "Kuala Lumpur",
      pais: "Malaysia",
      imagenCiudad: require("../assets/kualalumpur.jfif").default,
    },
    {
      nombreCiudad: "Paris",
      pais: "France",
      imagenCiudad: require("../assets/paris.jfif").default,
    },
    {
      nombreCiudad: "New York",
      pais: "United States",
      imagenCiudad: require("../assets/newyork.jfif").default,
    },
    {
      nombreCiudad: "Singapore Harbour",
      pais: "Singapore",
      imagenCiudad: require("../assets/singapore.jfif").default,
    },
  ],

  [
    {
      nombreCiudad: "Dubai",
      pais: "United Arab Emirates",
      imagenCiudad: require("../assets/dubai.jfif").default,
    },
    {
      nombreCiudad: "Macau",
      pais: "China",
      imagenCiudad: require("../assets/macau.jpg").default,
    },
    {
      nombreCiudad: "Bangkok",
      pais: "Thailand",
      imagenCiudad: require("../assets/bangkok.jfif").default,
    },
    {
      nombreCiudad: "Buenos Aires",
      pais: "Argentina",
      imagenCiudad: require("../assets/buenosaires.jpg").default,
    },
  ],

  [
    {
      nombreCiudad: "Sydney",
      pais: "Australia",
      imagenCiudad: require("../assets/sydney.jfif").default,
    },
    {
      nombreCiudad: "London",
      pais: "England",
      imagenCiudad: require("../assets/london.jfif").default,
    },
    {
      nombreCiudad: "Berlin",
      pais: "Germany",
      imagenCiudad: require("../assets/berlin.jfif").default,
    },
    {
      nombreCiudad: "New Delhi",
      pais: "India",
      imagenCiudad: require("../assets/newdelhi.jfif").default,
    },
  ],
];

export default function Divcarousel() {
  return (
    <>
      <h1 className="mostpop">Most popular Mytineraries</h1>

      <Carousel className="carousel">
        {arrayCiudades.map((ciudad) => {
          return (
            <Carousel.Item>
              <Row xs={1} md={2} className="g-4">
                {ciudad.map((array) => {
                  return (
                    <Col>
                      <Card className="cardcarousel">
                        <Card.Img
                          variant="top"
                          className="imagencard"
                          variant="top"
                          src={array.imagenCiudad}
                        />
                        <Card.Body>
                          <Card.Title>{array.nombreCiudad}</Card.Title>
                          <Card.Title>{array.pais}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
                ;
              </Row>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
