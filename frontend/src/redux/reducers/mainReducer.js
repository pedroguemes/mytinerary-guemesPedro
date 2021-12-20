import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import authReducer from "./authReducer";
import activitiesReducer from "./activitiesReducer";
import commentsReducer from "./commentsReducer";

const mainReducer = combineReducers({
  citiesReducer,
  itinerariesReducer,
  authReducer,
  activitiesReducer,
  commentsReducer,
});

export default mainReducer;
