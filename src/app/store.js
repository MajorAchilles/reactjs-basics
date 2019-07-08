import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import math from "./reducers/mathReducer"
import user from "./reducers/userReducer"

export default createStore(
    combineReducers({ math, user }),
    {},
    applyMiddleware(createLogger(), thunk, promiseMiddleware)
);

// store.subscribe(() => {
//     // console.log("Store updated", store.getState());
// });

// store.dispatch({
//     type: "ADD",
//     payload: 100
// });

// store.dispatch({
//     type: "ADD",
//     payload: 22
// });

// store.dispatch({
//     type: "SUBTRACT",
//     payload: 80
// });

// store.dispatch({
//     type: "SET_AGE",
//     payload: 29
// });

// store.dispatch({
//     type: "SET_NAME",
//     payload: "Amlan"
// });