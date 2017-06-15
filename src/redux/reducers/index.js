// Our required modules
import { combineReducers } from 'redux'

// Our reducers to combine
import * as searchReducers from './search';

// export our rootReducer - created by merging all of our separate files
export default combineReducers(
    searchReducers
);