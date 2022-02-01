import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import imagenActividad from '../assets/imagenActividades.jpg'
import activitiesActions from "../redux/actions/activitiesActions"
import axios from 'axios';


function Activity (props) {
  
    const [activities, setActivities] = useState("")

    //  const {itineraryId, getActivities, activities} = props

    //  useEffect(() => {
    //    getActivities(itineraryId);
    //     }, []); 

    const {itineraryId} = props
     useEffect(async () =>  {
       try{
      let getActivities = await axios.get(
        `http://localhost:4000/api/activities/${itineraryId}`        
        );
        setActivities(getActivities.data.activities)
      }catch(err){
        console.log(err)
      }
    }, []); 
    
    console.log(activities)
    
    // const [getActivities] = activities
          
          // const itineraryActivities = activities.filter((activity)=>{
          //      return activity.itineraryId[0]._id === itineraryId})

    return (
                <>       
                 { activities.length > 0 && activities.map((activity) => (
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
                 {/* <h1>Hola</h1> */}
       </>
    )
}



// const mapStateToProps = (state) => {
//      return {
//        activities: state.activitiesReducer.activities,
//      };
//    };
 
//    const mapDispatchToProps = {
//      getActivities: activitiesActions.getActivities,
//    };
 
// export default connect(mapStateToProps, mapDispatchToProps)(Activity);
export default Activity;