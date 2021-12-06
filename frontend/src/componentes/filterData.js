import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cardcities(props) {
  const [filtrado, setFiltrado] = useState("");

  return (
    <>
      <div className="divCitiesSearch">
        <input
          className="citiesSearch"
          placeholder="Search Cities :)"
          type={Text}
          onChange={(evento) => setFiltrado(evento.target.value)}
        />
      </div>
      {props.arrayCities
        .filter((city) => {
          if (filtrado === "") {
            return city;
          } else if (
            city.nombreCiudad
              .toLowerCase()
              .trim()
              .startsWith(filtrado.toLowerCase().trim()) ||
            city.pais
              .toLowerCase()
              .trim()
              .startsWith(filtrado.toLowerCase().trim())
          ) {
            return city;
          } else {
          }
        })
        .map((city) => (
          <Card as={Link} to={`/cities/${city._id}`} className="cardcities">
            <Card.Img
              variant="top"
              className="imagencard"
              variant="top"
              src={city.imagenCiudad}
            />
            <Card.Body>
              <Card.Title>{city.nombreCiudad}</Card.Title>
              <Card.Title>{city.pais}</Card.Title>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}