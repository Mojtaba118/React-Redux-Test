import { createStore, combineReducers, applyMiddleware } from "redux";
import { createPromise } from "redux-promise-middleware";
import thunk from "redux-thunk";
import userReducer from "./../reducers/userReducer";
import mathReducer from "./../reducers/mathReducer";

const store = createStore(
  combineReducers({ user: userReducer, math: mathReducer }),
  {},
  applyMiddleware(thunk, createPromise())
);

export default store;
