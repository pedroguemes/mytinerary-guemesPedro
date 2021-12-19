import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { AiOutlineLike } from "react-icons/ai";
import { connect } from "react-redux";
import City from "../pags/City";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Activity from "./Activity";
import Comments from "./Comments";

function Itinerario(props) {
  // const id = window.location.href.split("/").pop()
  const { getItineraries, idCity, itineraries, nombreCity } = props;

  // console.log(props);

  useEffect(() => {
    getItineraries(idCity);
  }, []);
  
  let disliked = true;

  return itineraries.length > 0 ? (
    itineraries.map((itinerary) => (
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
                <p>Duration: {itinerary.duration}Hs</p>
                <p>
                  Price:<span>{"💵".repeat(itinerary.price)}</span>
                </p>
                <div className="buttonLikeContainer">
                  {disliked ? (
                    <button className="buttonLike">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-thumb-up"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffbf00"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                      </svg>
                    </button>
                  ) : (
                    <button className="buttonLike">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-thumb-up"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffbf00"
                        fill="#ff9300"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                      </svg>
                    </button>
                  )}
                  <span>{itinerary.likes}</span>
                </div>
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
                <Accordion.Body className="accordionBody">
                  <div className="viewMoreContenido">
                    <div className="actividadesItinerary">
                      <div className="actividadesContenedorInterno">
                        <Activity/>
                      </div>
                      {/* <h1>(Comments under construction)</h1> */}
                      {/* </div>
                        <Activity/>
                      <div className="actividadesItinerary">
                      </div>
                      <div className="actividadesItinerary">
                        <Activity/>
                      </div>
                      <div className="comentariosItinerary">
                        <h1>(Comments under construction)</h1>
                      </div> */}
                    </div>
                  
                    <div className="comentariosItinerary">
                      {/* <h1>(Comments under construction)</h1> */}
                      <Comments itineraryId={itinerary._id}/>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </>
    ))
  ) : (
    <h1 className="emptyItineraries">
      ..There are no itineraries for {nombreCity} yet..
    </h1>
  );
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
