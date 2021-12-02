import React from "react";
// import {Card, Button} from 'react-bootstrap'
import imagen from "../assets/dubai2.jfif";

function Itinerario() {
  return (
    
      <div className="itinerarioContainer">
        <img src={imagen} className="imagenItinerario" alt="imagenItinerario" />
        <div className='infoItinerario'>
          <div className="tituloItinerario">
            <h1>Titulo</h1>
          </div>
          <div className="infoUser">
            <img className="imagenRedondaUser" src={imagen} alt="imagenUser" />
            <h2> author : nombre iuser</h2>
          </div>
          <div className="descripcion">
            <p>Descripcion</p>
          </div>
          <div className='infoinfo'>
            <p>Duracion</p>
            <p>precio</p>
            <p>likes</p>
          </div>
        </div>
      </div>
    
  );
}
export default Itinerario;

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
