const initialState = {
    activities: [],
  };
  
  const activitiesReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case "get_Activities":
          // console.log(state.activities)
          console.log(action.payload)
          return {
            ...state,
            // activities:[
            //   ...state.activities,
            //   ...action.payload.data.activities,
            // ] 
            activities:action.payload.data.activities,
          };
      default:
        return state;
    }
  };
  
  export default activitiesReducer;

      //   case "post_Activities":
    //     return {
    //       ...state,
    //      activities: action.payload,
    //     };