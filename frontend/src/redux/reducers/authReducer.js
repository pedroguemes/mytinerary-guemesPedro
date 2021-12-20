const initialState = {
    countryNames: [],
    user:{  
  }
  };
  
  const authReducer = (state = initialState, action) => {
    //  chequear el disparo de la action
    //   console.log(action)
    switch (action.type) {
      case "Get_countryNames":
        return {
          ...state,
          countryNames: action.payload,
        }
        case "cargar_User":
          // console.log("reducer")
          // console.log(action.payload)
          return {
            ...state,
            user:action.payload
            // user:{
            //   token:action.payload.token || localStorage.getItem('token'),
            //   firstName:action.payload.firstName,
            //   lastName:action.payload.lastName,
            //   imagenUser:action.payload.imagenUser,
            //   userCountry:action.payload.userCountry                          
            // }
          };
        case "logOut":
          return {
            ...initialState,
          };
        default:
          return state;
    }
  };
  
export default authReducer;
  