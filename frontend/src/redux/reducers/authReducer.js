const initialState = {
    countryNames: [],
    user:{}
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
            user: action.payload,
          };
        default:
          return state;
    }
  };
  
export default authReducer;
  