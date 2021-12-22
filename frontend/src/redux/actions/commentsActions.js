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

  getComments: (itineraryId) => {
    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
      let comments = await axios.get(
        `http://localhost:4000/api/comments/${itineraryId}`,null,{
            headers:{
            'Authorization':'Bearer '+ token
          }});
          // console.log(comments)
    dispatch({ type: "get_Comments", payload:comments});
    };
  },

  modifyComment:(id, comment, token ) => {
    return async (dispatch, getState)=> {
        try{
            let response = await axios.put(`http://localhost:4000/api/itinerary/comments/${id}`, comment,{
                headers : {
                    Authorization: 'Bearer '+token
                }
            })
            console.log(response)
            if(response.data.success) return {success:true, res:response.data.response}
        }catch (error){
            console.log(error)
        }
    }
},

deleteComment:(token, commentId, ) => {      
  return async (dispatch, getState) => {
      try{
          let response = await axios.put(`http://localhost:4000/api/itinerary/comments/${commentId}`
          , {
              headers : {
                  Authorization: 'Bearer '+ token
              }
          }
          )
          if(response.data.success){
              return response.data
          }
      }catch (error){
          console.log(error)
      }
  }
}

};

export default commentsActions;
