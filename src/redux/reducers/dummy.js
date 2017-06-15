// import our required constants
import { DUMMY_CONSTANT } from '../constants';

// export reducer function
export default function dummyReducer (state = {}, action) {
  switch (action.type) {
    case DUMMY_CONSTANT:
      return state;      
    default:
      return state;
  }
}