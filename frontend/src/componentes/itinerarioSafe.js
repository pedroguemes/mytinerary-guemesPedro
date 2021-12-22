import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { AiOutlineLike } from "react-icons/ai";
import { connect } from "react-redux";
import City from "../pags/City";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Activity from "./Activity";
import Comments from "./Comments";
import Swal from 'sweetalert2'
import { boolean } from "joi";


function Itinerario(props) {

  const { getItineraries, idCity, itineraries, nombreCity, likesAndDislikes, user} = props;

  console.log(user);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const [itinerariesLikes, setItinerariesLikes] = useState(itineraries.likes)
  
  // const [like, setLike] = useState(true)
  const [button, setButton] = useState(false)
  const [disliked, setDisliked] = useState(true)
  
  useEffect(() => {
    getItineraries(idCity);
  }, []);
  
  // let disliked = true;
  // itinerariesLikes.includes(user.userId) ?  setDisliked(!disliked) : 

    // const resLikesAndDislikes = likesAndDislikes()

  const buttonHandler = () => {
    setButton(!button)
  }

  const resLikesAndDislikes = async () => {
    let like
    itineraries.map((itinerary) => (
    like = {itineraryId:itinerary._id, userId:user._id, boolean}))

    // setLike(false) 
    if(!props.user._id) {
      Toast.fire({
        icon: 'error',
        title: 'You must be logged to like this post!'
      })  
    }else {
    let response = await likesAndDislikes(like)
    console.log(response)
    setItinerariesLikes(response)

    } 
      // setLike(true)
    }


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
                    <button onClick={resLikesAndDislikes} className="buttonLike">
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
                  <span>{itinerary.likes.length}</span>
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
                <Accordion.Header onClick={buttonHandler}>{!button  ? "View More" : "Hide"}</Accordion.Header>
                <Accordion.Body className="accordionBody">
                  <div className="viewMoreContenido">
                    <div className="actividadesItinerary">
                      <div className="actividadesContenedorInterno">
                        <Activity itineraryId={itinerary._id}/>
                      </div>
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
    user: state.authReducer.user,
  };
};

const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItineraries,
  likesAndDislikes: itinerariesActions.likesAndDislikesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerario);
