// import required modules
import { combineEpics } from 'redux-observable';

// Epics to combine
import dummyEpic from './dummy';

// export our rootEpic
export default combineEpics(
    dummyEpic
);