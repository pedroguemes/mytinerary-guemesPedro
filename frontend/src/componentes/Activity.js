// import { connect } from 'react-redux'
import imagenActividad from '../assets/imagenActividades.jpg'

const Activity = (props) => {
    return (
       <>
            <div className="containerActivity">
                                       <h4 className="tituloActividad">Titulo Actividad</h4>
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