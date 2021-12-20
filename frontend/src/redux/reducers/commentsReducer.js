const initialState = {
    comments: [],
  };
  
  const commentsReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
      case "post_Comments":
        return {
          ...state,
          comments: action.payload,
        };
        case "get_Comments":
          // console.log(state.comments)
          return {
            ...state,
            comments:[
              ...state.comments,
              ...action.payload.data.comments,
            ] 
          };
      default:
        return state;
    }
  };
  
  export default commentsReducer;
