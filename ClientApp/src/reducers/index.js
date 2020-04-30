import {combineReducers} from 'redux';
import tripReducers from './tripReducers';

// for them to be accessable, we can combine them to the root reducers
const rootReducers = combineReducers({
    trips: tripReducers
})

export default rootReducers;