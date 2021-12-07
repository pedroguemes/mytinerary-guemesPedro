const axios = require('axios')

const authActions = {
        getCountryNames: () => {
            return async (dispatch, getState) => {
            let response = await   axios.get('https://restcountries.com/v2/all?fields=name')
            //chequear fetch console.log(response.data)
            dispatch({ type: "Get_countryNames", payload: response.data});
        };
  },
    cargarUsuario: (userName,password) => {
      try {   
      const user = await axios.post('http://localhost:4000/api/users',{username, password})
          dispatch({type:'cargar_User', payload:{userName}})  
        }catch(error){
              }
    }
}

export default authActions;