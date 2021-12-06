import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import ErrorSearch from "./ErrorSearch";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import FilterCities from "./FilterCities";

function Cardcities(props) {
  const { cities, getCities, citiesAuxiliar } = props;

  console.log(cities);

  useEffect(() => getCities(), []);

  return (
    <>
      <FilterCities cities={citiesAuxiliar} filtro={props.filterCities} />
       
      {cities.length === 0 ? (
        <ErrorSearch />
      ) : (
        cities.map((city) => (
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
        ))
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    citiesAuxiliar: state.citiesReducer.auxiliar,
  };
};

const mapDispatchToProps = {
  getCities: citiesActions.getCities,
  filterCities: citiesActions.filterCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cardcities);
