// import our required constants
import { SEARCH_USERS, SEARCH_USERS_FULFILLED } from '../constants';

// export reducer functions
export function searching (state = false, action) {
  switch (action.type) {
    case SEARCH_USERS:      
      // we'll update the app to 'searching...' until we have some response data
      return {
        ...state,
        searching: true      
      };  
    case SEARCH_USERS_FULFILLED:      
      // we'll update the app state to show the search is complete
      return {
        ...state,
        searching: false     
      };      
    default:
      return state;
  }
};

export function response (state = { data: {} }, action) {
  switch (action.type) {
    case SEARCH_USERS:
      // we'll clear any pre-existing search results
      return {
        ...state,
        data: {}
      }
    case SEARCH_USERS_FULFILLED:      
      // we can put our payload into our state as 'results'
      return {
        ...state,
        data: action.payload
      };       
    default:
      return state;
  }
};