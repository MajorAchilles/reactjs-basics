import {render} from "react-dom";
import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import App from "./containers/App"

const mathReducer = (state = {
    result: 0,
    lastValues: []
}, action) => {
    switch(action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }

    return state;
};

const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch(action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload,
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload,
            }
            break;
    }

    return state;
};

const myLogger = store => next => action => {
    // console.log("Dispatching action", action);
    const result =  next(action);
    return result;
};

const store = createStore(
    combineReducers({
        math: mathReducer,
        user: userReducer
    }),
    {},
    applyMiddleware(myLogger, createLogger())
);

store.subscribe(() => {
    // console.log("Store updated", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "ADD",
    payload: 22
});

store.dispatch({
    type: "SUBTRACT",
    payload: 80
});

store.dispatch({
    type: "SET_AGE",
    payload: 29
});

store.dispatch({
    type: "SET_NAME",
    payload: "Amlan"
});

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    window.document.getElementById('app')
);