// import { Provider } from "react-redux";
// import { applyMiddleware, compose, createStore } from 'redux';
// import thunk from "redux-thunk";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer, { initialState } from './worker/reducer';
import { StateProvider } from './worker/StateProvider';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

ReactDOM.render( 
    <Router>
        <Switch>
            <StateProvider initialState={initialState} reducer={reducer}>
                <App />
            </StateProvider>
        </Switch>
    </Router>, 
    document.getElementById("root"));
