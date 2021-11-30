import React, {useState} from "react";
import {Card} from 'react-bootstrap';
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export default function Cardcities (props) {

        
    // console.log(props.arraycities[0])
    // console.log(props.arraycities.imagenCiudad)
    // const navegar = useNavigate('/Cities')

    // const [state, setState] = useState(false)
    const [filtrado, setFiltrado] = useState('')
        
   
    return (
        <>      
                <div className="divCitiesSearch">
                <input className="citiesSearch" placeholder="Search Cities :)" type={Text} onChange={(evento)=>setFiltrado(evento.target.value)}/>
                </div>
                {props.arrayCities.filter(   
                    (city) =>{    
                        if(filtrado === ''){
                            return city
                        } else if (city.nombreCiudad.toLowerCase().trim().startsWith(filtrado.toLowerCase().trim()) || city.pais.toLowerCase().trim().startsWith(filtrado.toLowerCase().trim())){
                            return city
                        } else {
                            <h1>busquedos sin resulteda</h1>
                        }
                        
                     }).map((city)=>(
                        
                        <Card as={Link} to={`/cities/${city._id}`} className="cardcities">
                                <Card.Img
                                     variant="top"
                                     className="imagencard" variant="top"
                                     src={city.imagenCiudad}/>
                             <Card.Body>
                             <Card.Title>{city.nombreCiudad}</Card.Title>
                             <Card.Title>{city.pais}</Card.Title>
                             </Card.Body>
                         </Card>
                         
                     ))}
       </>
       )
    }
    

    
{/* //     {props.arraycities.map(   
//         (city) => (    
// <Card onClick={()=>setState(!state)} className="cardcities">
//         <Card.Img
//             variant="top"
//             className="imagencard" variant="top"
//             src={city.imagenCiudad}/>
//     <Card.Body>
//     <Card.Title>{city.nombreCiudad}</Card.Title>
//     <Card.Title>{city.pais}</Card.Title>
//     </Card.Body>
// </Card>

//      ) )}  */}