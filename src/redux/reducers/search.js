// import our required constants
import { SEARCH_USERS } from '../constants';

// export reducer functions
export function searching (state = false, action) {
  switch (action.type) {
    case SEARCH_USERS:      
      // we'll update the app to 'searching...' until we have some response data
      return {
        ...state,
        searching: true      
      };      
    default:
      return state;
  }
}

export function results (state = false, action) {
  switch (action.type) {
    case SEARCH_USERS:
      // we'll clear any pre-existing search results
      return {
        ...state,
        results: []
      }
    default:
      return state;
  }
}