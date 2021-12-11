import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import mainReducer from "./redux/reducers/mainReducer";

const globalStore = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={globalStore}>
      <App />
    </Provider>,
  
  document.getElementById("root")
);
