import { useEffect } from 'react';
// import { connect } from 'react-redux'
import imagenActividad from '../assets/imagenActividades.jpg'

const Activity = (props) => {

     // const { } = props

     useEffect(() => {
          // getActivities(idItinerary);
        }, []); 
    return (
       <>
            <div className="containerActivity">
                                       <h5 className="tituloActivity">Titulo Actividad</h5>
                                       <div className="containerImagenActivity">
                                            <img src={imagenActividad} className="imagenActivity"/>
                                       </div>
                                       <p className="descActivity">descriplorem mmmm iiii ipsumctividad</p>
            </div>            
       </>
    )
}


export default Activity

// const mapDispatchToProps = {

// }

// export default connect(null, mapDispatchToProps)(Activity)