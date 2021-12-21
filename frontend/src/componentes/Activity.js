import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import imagenActividad from '../assets/imagenActividades.jpg'
import activitiesActions from "../redux/actions/activitiesActions"


function Activity (props) {

     const {itineraryId, getActivities, activities} = props

     useEffect(() => {
       getActivities(itineraryId);
        }, []); 

    // console.log(activities)
          
          const itineraryActivities = activities.filter((activity)=>{
               return activity.itineraryId[0]._id === itineraryId})

    return (
                <>       
                 { itineraryActivities.map((activity) => (
                          <div className="containerActivity">
                                       <h5 className="tituloActivity">{activity.title}</h5>
                                       <div className="containerImagenActivity">
                                            <img src={activity.image} className="imagenActivity"/>
                                       </div>
                                       <div className="descActivity">
                                       <p >{activity.description}</p> 
                                       </div>
                           </div>         
                 ))}         
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Activity);