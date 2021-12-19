const initialState = {
    comments: [{}],
  };
  
  const commentsReducer = (state = initialState, action) => {
    console.log(action.payload)
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
  
  export default commentsReducer;
  