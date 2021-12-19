import axios from "axios";

const commentsActions = {
  postComment: ({user,itineraryId,comment}) => {
    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
      let response = await axios.post(
        `http://localhost:4000/api/comments/`,{user,itineraryId,comment},{
            headers:{
            'Authorization':'Bearer '+ token
          }});
    dispatch({ type: "post_Comments", payload:response});
    };
  },
  getComment: (itineraryId) => {
    const token = localStorage.getItem('token')

    return async (dispatch, getState) => {
      let response = await axios.get(
        `http://localhost:4000/api/comments/${itineraryId}`,null,{
            headers:{
            'Authorization':'Bearer '+ token
          }});
    dispatch({ type: "get_Comments", payload:response});
    };
  },
};

export default commentsActions;
