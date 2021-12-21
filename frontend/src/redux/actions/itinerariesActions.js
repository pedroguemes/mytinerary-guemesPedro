import axios from "axios";

const itinerariesActions = {
  getItineraries: (id) => {
    return async (dispatch, getState) => {
      let response = await axios.get(
        `http://localhost:4000/api/itineraries/city/${id}`
      );

      dispatch({ type: "Get_itineraries", payload: response.data.itineraries });
    };
  },
  
  likesAndDislikesAction: (like) => {
   
  },
  
};
export default itinerariesActions;
