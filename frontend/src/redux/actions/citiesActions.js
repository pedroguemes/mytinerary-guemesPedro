import axios from "axios"

const citiesActions = {
        getCities : () => {
        return async (dispatch, getState) => {
         let response =  await  axios.get('http://localhost:4000/api/cities')
         
         dispatch({type:"Get_cities", payload:response.data.cities})
        }
      },
        getCity : (id) => {
        return async (dispatch, getState) => {
         let response =  await  axios.get(`http://localhost:4000/api/cities/${id}`)
         
         dispatch({type:"Get_city", payload:response.data.city})
        }  
      },
      filterCities: (cities, inputValue) => {       
        return (dispatch, getState) => {        
          dispatch({type:"filter_cities", payload:{cities,inputValue}})
         }
      }
    }

export default citiesActions