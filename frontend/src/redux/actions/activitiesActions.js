import axios from "axios";

const activiesActions = {
  getActivities: (itineraryId) => {
    return async (dispatch, getState) => {
      let activities = await axios.get(
        `http://localhost:4000/api/activities/${itineraryId}`
      );
        console.log(activities)
      dispatch({ type: "get_Activities", payload:activities });
    };
  },
};

export default activiesActions;
