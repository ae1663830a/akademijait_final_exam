import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import "./index.css";
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import objectCreationReducer from './store/reducers/objectCreationReducer'
import fetchListReducer from "./store/reducers/fetchListReducer";
import objectReducer from "./store/reducers/objectReducer";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    createObject: objectCreationReducer,
    getObject: objectReducer,
    getList: fetchListReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById("root")
);

registerServiceWorker();
