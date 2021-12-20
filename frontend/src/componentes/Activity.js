import { useEffect } from 'react';
import { connect } from 'react-redux'
import imagenActividad from '../assets/imagenActividades.jpg'
import activitiesActions from "../redux/actions/activitiesActions"


const Activity = (props) => {

     const {itineraryId, getActivities, activities} = props

     useEffect(() => {
         getActivities(itineraryId);
        }, []); 

          console.log(activities)
          

    return (
       <>
       
            <div className="containerActivity">
                 { activities.map((activity) => (
                                   <>
                                       <h5 className="tituloActivity">Titulo Actividad</h5>
                                       <div className="containerImagenActivity">
                                            <img src={imagenActividad} className="imagenActivity"/>
                                       </div>
                                       <p className="descActivity">descriplorem mmmm iiii ipsumctividad</p> 
                                   </>
                 ))} 
            </div>         
        
       </>
    )
}



const mapStateToProps = (state) => {
     return {
       activities: state.activitiesReducer.activities,
     };
   };
 
   const mapDispatchToProps = {
     getActivities: activitiesActions.getActivities,
   };
 
export default connect(mapStateToProps, mapDispatchToProps)(Activity)