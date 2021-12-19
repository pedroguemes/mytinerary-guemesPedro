import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import authReducer from "./authReducer";
import commentsReducer from "./commentsReducer";

const mainReducer = combineReducers({
  citiesReducer,
  itinerariesReducer,
  authReducer,
  commentsReducer,
});

export default mainReducer;
