import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import math from "./reducers/mathReducer"
import user from "./reducers/userReducer"

const myLogger = store => next => action => {
    // console.log("Dispatching action", action);
    const result =  next(action);
    return result;
};

export default createStore(
    combineReducers({ math, user }),
    {},
    applyMiddleware(myLogger, createLogger())
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