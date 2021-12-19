const initialState = {
    comments: [{}],
  };
  
  const itinerariesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "post_Comments":
        return {
          ...state,
          comments: action.payload,
        };
      case "get_Comments":
        return {
          ...state,
          comments: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default itinerariesReducer;
  