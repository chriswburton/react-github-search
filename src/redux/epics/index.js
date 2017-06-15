// import required modules
import { combineEpics } from 'redux-observable';

// Epics to combine
import searchEpic from './search';

// export our rootEpic
export default combineEpics(
    searchEpic
);