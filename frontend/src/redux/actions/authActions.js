const axios = require('axios')

const authActions = {
        getCountryNames: () => {
            return async (dispatch, getState) => {
            let response = await   axios.get('https://restcountries.com/v2/all?fields=name')
            //chequear fetch console.log(response.data)
            dispatch({ type: "Get_countryNames", payload: response.data});
        };
  },
    cargarUsuario: (firstName, lastName, userMail, password, imagenUser,userCountry) => {
      return async (dispatch, getState) => {
        try {   
        const user = await axios.post('http://localhost:4000/api/auth/signUp',{firstName, lastName, userMail, password,  imagenUser,userCountry})
          if (user.data.success && !user.data.error) {   
            dispatch({type:'cargar_User', payload:{firstName, lastName, userMail, imagenUser, userCountry}})  
      }else{
        console.error(user.data.response)
              return { errores : [{message:user.data.error}]}
        }
          }catch(error){ }
        }
     },

     cargarSignIn: (userMail,password) => {
      return async(dispatch, getState)=>{
          try {
              const user = await axios.post('http://localhost:4000/api/auth/signIn',{userMail, password})
              if(user.data.success && !user.data.error){
                  dispatch({type:'cargar_User', payload:{userName:user.data.response.userName}})
                  // return {user}
                }else{
                  console.log(user.data)
              }
          }catch(error){
              console.error(error)
          }
      }
  }

}

export default authActions;