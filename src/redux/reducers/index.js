// Our required modules
import { combineReducers } from 'redux'

// Our reducers to combine
import dummyReducer from './dummy';

// export our rootReducer - created by merging all of our separate files
export default combineReducers({
    dummy: dummyReducer
});