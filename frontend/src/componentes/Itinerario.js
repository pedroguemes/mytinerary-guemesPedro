import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { AiTwotoneLike } from "react-icons/ai";
import { connect } from "react-redux";
import City from "../pags/City";
import itinerariesActions from "../redux/actions/itinerariesActions";

function Itinerario(props) {
  // const id = window.location.href.split("/").pop()
  const { getItineraries, idCity, itineraries, nombreCity } = props;

  console.log(props);

  useEffect(() => {
    getItineraries(idCity);
  }, []);
  return itineraries.length > 0 ? itineraries.map((itinerary) => (
    <>
      <div className="containerItinerary">
        <div className="tituloItinerary">
          <h1>{itinerary.nombreItinerary}</h1>
        </div>
        <div className="contenedorimageninfo">
          <img
            alt="imagenItinerary"
            className="imagenItinerary"
            src={itinerary.imagenItinerario}
          />
          <div className="infoDerecha">
            <div className="imagenYnombre">
              <h2>{itinerary.userName}</h2>
              <img
                className="imagenUser"
                alt="imagenUser"
                src={itinerary.imagenUser}
              />
            </div>
            <div className="itineraryDescription">
              <p>{itinerary.description}</p>
            </div>
            <div className="aboutItinerary">
              <p>Duration: {itinerary.duration}</p>
              <p>
                Price:<span>{"💵".repeat(itinerary.price)}</span>
              </p>
              <p>♥{itinerary.likes}</p>
            </div>
            <div>
              <p>{itinerary.hashtags}.</p>
            </div>
          </div>
        </div>
        <div>
          <Accordion className="viewMore" defaultActiveKey="0">
            <Accordion.Item bg="myviewMore" eventKey="1">
              <Accordion.Header>View more</Accordion.Header>
              <Accordion.Body>
                <div className="viewMoreContenido">
                  <div className="actividadesItinerary">
                    <h1> ( activitiesUnder construction)</h1>
                  </div>
                  <div className="comentariosItinerary">
                    <h1>(Comments under construction)</h1>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  )) : 
  <h1 className="emptyItineraries">..There are no itineraries for {nombreCity} yet..</h1>
   
}

const mapStateToProps = (state) => {
  return {
    itineraries: state.itinerariesReducer.itineraries,
  };
};

const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItineraries,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerario);
