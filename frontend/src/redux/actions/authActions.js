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
          const token = localStorage.getItem('token')
        const user = await axios.post('http://localhost:4000/api/auth/signUp',{firstName, lastName, userMail, password,  imagenUser,userCountry},{
          headers:{
            'Authorization':'Bearer '+ token
          }
        })
          if (user.data.success && !user.data.error) { 
            // localStorage.setItem('token',user.data.response.token)
            localStorage.setItem('token',user.data.response.userExiste.token)
            // dispatch({type:'cargar_User', payload:{firstName, lastName, userMail, imagenUser, userCountry}})  
            dispatch({type:'cargar_User', payload:{token, firstName, lastName, userMail, imagenUser, userCountry}})  
            return {success:true, response:user}
      }else{
        console.error(user.data.response)
              return { errores : [{message:user.data.error}]}
        }
          }catch(error){ }
        }
     },

     cargarSignIn: (userMail,password) => {
      return async(dispatch, getState)=>{
        console.log(userMail, password)
          try {
            const token = localStorage.getItem('token')
              const user = await axios.post('http://localhost:4000/api/auth/signIn',{userMail, password},{
                headers:{
                'Authorization':'Bearer '+ token
              }})
              console.log(user)
              if(user.data.success && !user.data.error){
                localStorage.setItem('token',user.data.response.token)

                // const loggedUser = {                
                //     firstName:user.data.response.userExiste.firstName,
                //     lastName:user.data.response.userExiste.lastName,
                //     imagenUser:user.data.response.userExiste.imagenUser,
                //     userCountry:user.data.response.userExiste.userCountry                          
                  
                // }
                  dispatch({type:'cargar_User', payload:user.data.response})
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
        const user = await axios.get("http://localhost:4000/auth/verifytoken",
       { headers:{
          'Authorization':'Bearer '+ token,
        }
         }
        ) 
        const userToken = {   
          token,
          firstName:user.data.response.userExiste.firstName,
          lastName:user.data.response.userExiste.lastName,
          imagenUser:user.data.response.userExiste.imagenUser,
          userCountry:user.data.response.userExiste.userCountry         
        } 
        dispatch({type:"cargar_User", payload: userToken })
      }catch(error){
        return dispatch({type:"logOut", payload:{}})
      }
    }
  }

}

export default authActions;