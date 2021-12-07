const initialState = {
    countryNames: [],
  };
  
  const authReducer = (state = initialState, action) => {
    //  chequear el disparo de la action
    //   console.log(action)
    switch (action.type) {
      case "Get_countryNames":
        return {
          ...state,
          countryNames: action.payload,
        };
      default:
        return state;
    }
  };
  
export default authReducer;
  