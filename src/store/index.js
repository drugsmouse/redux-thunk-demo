import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import heroes from "../reducers/heroes";

const store = createStore(
  combineReducers({ heroes }),
  applyMiddleware(thunk)
);

export default store;
