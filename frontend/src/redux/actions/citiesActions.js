import axios from "axios"

const citiesActions = {
        getCities : () => {
        return async (dispatch, getState) => {
         let response =  await  axios.get('http://localhost:4000/api/cities')
         
         dispatch({type:"Get ciudades", playload:response.data.cities})
        }
      }
    }

export default citiesActions