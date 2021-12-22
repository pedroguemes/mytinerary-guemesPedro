import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { AiOutlineLike } from "react-icons/ai";
import { connect } from "react-redux";
import City from "../pags/City";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Activity from "./Activity";
import Comments from "./Comments";
import Swal from 'sweetalert2'


function LikeButton(props) {

  const {itinerary, itineraryId, likesAndDislikes, user, cityId, getItineraries} = props;

  // console.log(user);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  
//   const [like, setLike] = useState(true)
  const [button, setButton] = useState(false)
  const [boolean, setBoolean] = useState(itinerary.likes.find((like)=>like===user._id) ? true : false)
//   const [disliked, setDisliked] = useState(true)
  
  
  // let disliked = true;
  // itinerariesLikes.includes(user.userId) ?  setDisliked(!disliked) : 

    // const resLikesAndDislikes = likesAndDislikes()

  const buttonHandler = () => {
    setButton(!button)
  } 
 
  const resLikesAndDislikes = async () => {
    // setLike(false) 
    
 
    let like = {itineraryId:itineraryId, userId:user._id, cityId, boolean}
    if(!props.user._id) {
      Toast.fire({
        icon: 'error',
        title: 'You must be logged to like this post!'
      })  
    }else {
    let response = await likesAndDislikes(like)
    if(response.success){
      setBoolean(!boolean) 
        getItineraries(cityId)
    }
    console.log(response)
    } 
      // setLike(true)
    }


  return  (
   
      <>
                       {/* {disliked ? ( */}
                    <button onClick={resLikesAndDislikes} className="buttonLike">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-thumb-up"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffbf00"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                      </svg>
                    </button>
                  {/* ) : ( */}
                    {/* <button className="buttonLike">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-thumb-up"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffbf00"
                        fill="#ff9300"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                      </svg>
                    </button> */}
                  {/* )} */}
                 
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    itineraries: state.itinerariesReducer.itineraries,
    user: state.authReducer.user,
  };
};

const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItineraries,
  likesAndDislikes: itinerariesActions.likesAndDislikesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
