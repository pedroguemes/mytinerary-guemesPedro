import axios from "axios"

const itinerariesActions = {
        getItineraries : (id) => {
        return async (dispatch, getState) => {
         let response =  await  axios.get(`http://localhost:4000/api/itineraries/city/${id}`)
         
         dispatch({type:"Get_itineraries", payload:response.data.itineraries})
        }
 
       }
    }
        //   },
    //   filterCities: (cities, inputValue) => {       
    //     return (dispatch, getState) => {        
    //       dispatch({type:"filter_cities", payload:{cities,inputValue}})
    //      }
    //   }
    

export default itinerariesActions