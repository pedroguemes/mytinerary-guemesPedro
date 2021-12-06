const initialState = {
  itineraries: [],
};

const itinerariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Get_itineraries":
      return {
        ...state,
        itineraries: action.payload,
      };
    default:
      return state;
  }
};

export default itinerariesReducer;
