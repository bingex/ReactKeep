import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import generalReducer from './generalReducer';
import newNoteReducer from './newNoteReducer';
import labelReducer from './labelReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    notes: noteReducer,
    newNote: newNoteReducer,
    routing: routerReducer,
    general: generalReducer,
    labels:labelReducer
});

export default rootReducer;