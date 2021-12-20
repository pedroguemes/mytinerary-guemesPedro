import axios from "axios";

const activiesActions = {
  getActivities: (id) => {
    return async (dispatch, getState) => {
      let activities = await axios.get(
        `http://localhost:4000/api/activities/${id}`
      );
        console.log(activities)
      dispatch({ type: "Get_Activities", payload:activities });
    };
  },
};

export default activiesActions;
