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
      // case "Update_itinerary":
      //   // console.log(action.payload)
      //   // let itineraries = state.itineraries.filter((itinerary)=>itinerary._id !== action.payload.response._id) 
      //   // let modifiedItinerary = action.payload.response
      //   // itineraries.push(modifiedItinerary)
      //   return {
      //     ...state,
      //     itineraries: action.payload,
      //   };
    default:
      return state;
  }
};

export default itinerariesReducer;
