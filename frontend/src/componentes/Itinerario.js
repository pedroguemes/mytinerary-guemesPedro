import React from "react";
import {Card, Button} from 'react-bootstrap'

 function Itinerario(){
    return (
             <div className="itinerarioContainer">
                <Card>
                    <Card.Header>Walking Buenos Aires</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
             </div>
    )
}
export default Itinerario