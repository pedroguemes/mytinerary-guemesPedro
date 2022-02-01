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
    // dispatch({ type: "post_Comments", payload:response.data.resp});
    return(response.data)
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
    // dispatch({ type: "get_Comments", payload:comments});
    console.log(comments.data)
    return(comments);
  };
},

modifyComment:(commentId, modifiedComment, token, itineraryId ) => {
  // console.log(commentId)
  // console.log(modifiedComment)
  // console.log(token)
  return async (dispatch, getState)=> {
    try{
      let response = await axios.put(`http://localhost:4000/api/comments/${commentId}`, {modifiedComment, itineraryId},{
        headers : {
          Authorization: 'Bearer '+ token
        }
      })
      console.log(response)
      if(response.data.success)
      dispatch({ type: "modify_Comments", payload:response.data})
       return response.data
    }catch (error){
      console.log(error)
    }
  }
},

deleteComment:(token, commentId, itineraryId) => {      
  // console.log(commentId)
  return async (dispatch, getState) => {
    try{
      let response = await axios.delete(`http://localhost:4000/api/comments/${commentId}/${itineraryId}`
      ,{
        headers : {
          Authorization: 'Bearer '+ token
        }
      }
      )
      // if(response.data.success){
      //   return response.data
      // }
      
      dispatch({ type: "delete_Comments", payload:commentId})
      return(response.data)
    }catch (error){
      console.log(error)
    }
    
  }
},

};

export default commentsActions;
