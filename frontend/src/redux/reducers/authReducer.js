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
          return {
            ...state,
            user:{
              token:action.payload.token || localStorage.getItem('token'),
              firstName:action.payload.userExiste.firstName,
              lastName:action.payload.userExiste.lastName,
              imagenUser:action.payload.userExiste.imagenUser,
              userCountry:action.payload.userExiste.userCountry                          
            }
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
  