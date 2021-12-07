import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import authReducer from "./authReducer";

const mainReducer = combineReducers({
  citiesReducer,
  itinerariesReducer,
  authReducer
});

export default mainReducer;
