import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import ErrorSearch from "./ErrorSearch";
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Cardcities(props) {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        setCities(props.arrayCities);
    }, []);

    const filterCities = (filterBy) => {
        if (filterBy === '') {
            setCities(props.arrayCities);
        } else {
            const filteredCities = props.arrayCities.filter(
                (city) =>
                    city.nombreCiudad
                        .toLowerCase()
                        .trim()
                        .startsWith(filterBy.toLowerCase().trim()) ||
                    city.pais
                        .toLowerCase()
                        .trim()
                        .startsWith(filterBy.toLowerCase().trim())
            );

            setCities(filteredCities);
        }
    };

    return (
        <>
            <div className="divCitiesSearch">
                <input
                    className="citiesSearch"
                    placeholder="Search Cities :)"
                    // type={Text}
                    onChange={(evento) => filterCities(evento.target.value)}
                />
            </div>
            {cities.length === 0 ? (
                <ErrorSearch />
            ) : (
                cities.map((city) => (
                    <Card
                        as={Link}
                        to={`/cities/${city._id}`}
                        className="cardcities"
                    >
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
                ))
            )}
        </>
    );
}