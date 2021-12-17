const axios = require('axios')

const authActions = {
        getCountryNames: () => {
            return async (dispatch, getState) => {
            let response = await   axios.get('https://restcountries.com/v2/all?fields=name')
            //chequear fetch console.log(response.data)
            dispatch({ type: "Get_countryNames", payload: response.data});
        };
  },
  
    // signUpUserAction: (firstName, lastName, userMail, password, imagenUser,userCountry, google) => {
    signUpUserAction: ({firstName, lastName, userMail, password, imagenUser,userCountry, google}) => {
        // console.log(firstName, lastName, userMail, password, imagenUser,userCountry)
        return async (dispatch, getState) => {
      try {   
                // const token = localStorage.getItem('token')
                // console.log(token)
                const user = await axios.post('http://localhost:4000/api/auth/signUp',{firstName, lastName, userMail, password,imagenUser,userCountry,google})
              console.log(user)
              // console.log(user.data.response.newUser)
                if (user.data.success && !user.data.error) { 
                  localStorage.setItem('token',user.data.response.token)
                  dispatch({type:'cargar_User', payload:user.data.response.newUser})  
                  // return {success:true, response:user}
                  return user
            }
            else{
              
              console.log(user.data.response)
                    return {error:user.data.response}
              
              }

        }catch(error){ console.log(error) }
          }
     },

     cargarSignIn: (userMail,password, google) => {
      return async(dispatch, getState)=>{
        console.log(userMail, password, google)
          try {
            const token = localStorage.getItem('token')
              const user = await axios.post('http://localhost:4000/api/auth/signIn',{userMail, password},{
                headers:{
                'Authorization':'Bearer '+ token
              }})
              if(user.data.success && !user.data.error){
                localStorage.setItem('token',user.data.response.token)
                console.log(user.data.response)
                  dispatch({type:'cargar_User', payload:user.data.response.userExiste})
                  // return {user}
                }else{
                  console.log(user.data)
              }
          }catch(error){
              console.log(error)
              // alert(user.data.error)
          }
      }
  },

  logOut: () => {
    return (dispatch, getState)=>{
      localStorage.clear()
      dispatch({type:'logOut',payload:{}})
    }
  },

  verifyToken: (token) => {
    return async (dispatch,getState)=>{
      try {
        const user = await axios.get("http://localhost:4000/api/auth/verifytoken",
       { headers:{
          'Authorization':'Bearer '+ token,
        }
         }
        )        
        console.log(user.data.response)       
        dispatch({type:"cargar_User", payload: user.data.response.userExiste })
      }catch(error){
        console.log(error)
        return dispatch({type:"logOut", payload:{}})
      }
    }
  }

}

export default authActions;