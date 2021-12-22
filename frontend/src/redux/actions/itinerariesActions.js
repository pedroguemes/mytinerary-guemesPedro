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
    return async (dispatch, getState) => {
      try {
        const  response = await axios.put(`http://localhost:4000/api/itinerary/likes`, {
          ...like,
        });

        // dispatch({ type: "Get_itineraries", payload: response.data.response});
                return response.data;
      } catch (err) {
        console.log(err);
      }
    };
  },
  
};
export default itinerariesActions;
