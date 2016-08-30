import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import LabelBox from './components/LabelBox/LabelBox';
import NoteMain from './components/NoteMain/NoteMain';
import ErrorComp from './components/Error/Error';
import './index.css';

let initialState = {
    notes: [],
    labels: [],
    newNote: {},
    general: {}
};

let store = configureStore(initialState);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ App }>
                <IndexRoute component={ NoteMain }></IndexRoute>
                <Route path="/note" component={ NoteMain }></Route>
                <Route path="/label" component={ LabelBox }></Route>
                <Route path="*" component={ ErrorComp }/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
