const initialState = {
    countryNames: [],
    user:{
    firstName:'',
    lastName:'',
    imagenUser:'',
    userCountry:''
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
              firstName:action.payload.firstName,
              lastName:action.payload.lastName,
              imagenUser:action.payload.imagenUser,
              userCountry:action.payload.userCountry                          
            }
          };
        default:
          return state;
    }
  };
  
export default authReducer;
  