import { applyMiddleware, compose, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const routerMW = routerMiddleware(browserHistory);

let finalCreateStore = compose(
    applyMiddleware(thunk, logger(), routerMW),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore (initialState = { notes: [], newNote: {}, general: {}, labels: [] }) {
    return finalCreateStore(rootReducer, initialState);
};