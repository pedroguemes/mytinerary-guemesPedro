import axios from "axios";

const activiesActions = {
  getActivities: (id) => {
    return async (dispatch, getState) => {
      let response = await axios.get(
        `http://localhost:4000/api/itineraries/city/${id}`
      );

      dispatch({ type: "Get_activities", payload: response.data.activities });
    };
  },
};

export default activiesActions;
