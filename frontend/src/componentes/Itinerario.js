import React, { useEffect } from "react";
// import {Card, Button} from 'react-bootstrap'
import imagen from "../assets/dubai2.jfif";
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';

function Itinerario(props) {
  
  // const id = window.location.href.split("/").pop()
  const  {getItineraries, idCity,  itineraries} = props
  
  console.log(props)

  useEffect(()=>{
    getItineraries(idCity)
  },[])

  return (
        // <h2>itineraries</h2>
    itineraries.map((itinerary) =>(
    <div className="itinerarioContainer">
        <img src={itinerary.imagenItinerario} className="imagenItinerario" alt="imagenItinerario" />
        <div className='infoItinerario'>
          <div className="tituloItinerario">
            <h1>{itinerary.nombreItinerary}</h1>
          </div>
          <div className="infoUser">
            <img className="imagenRedondaUser" src={imagen} alt="imagenUser" />
            <h2> author : {itinerary.user}</h2>
          </div>
          <div className="descripcion">
            <p>Descripcion</p>
          </div>
          <div className='infoinfo'>
            <p>{itinerary.duration}</p>
            <p>{itinerary.price}</p>
            <p>{itinerary.likes}</p>
          </div>
        </div>
      </div>))
    
  );

}



const mapStateToProps = state => {
  return {
      itineraries: state.itinerariesReducer.itineraries
  }
}

const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerario)

//  <div className="itinerarioContainer">
//     <Card>
//         <Card.Header>Walking Buenos Aires</Card.Header>
//         <Card.Body>
//             <Card.Title>Special title treatment</Card.Title>
//             <Card.Text>
//             With supporting text below as a natural lead-in to additional content.
//             </Card.Text>
//             <Button variant="primary"></Button>
//         </Card.Body>
//     </Card>
//  </div>
