// required module imports and constants
import { mergeMap } from 'rxjs/add/operator/mergeMap';
import { map } from 'rxjs/add/operator/map';
import { ajax } from 'rxjs/observable/dom/ajax';
import { SEARCH_USERS, SEARCH_USERS_FULFILLED } from '../constants';

// export our epic
export default (action$, state) => 
    // match all actions of type SEARCH_USERS
    action$.ofType(SEARCH_USERS)
        // we've matched - we can now reach out to the Github API
        .mergeMap(action => 
            ajax.getJSON(`https://api.github.com/search/users?q=${action.payload}`)
                // we can now return our response to be actioned by our reducers
                .map(payload => ({ type: SEARCH_USERS_FULFILLED, payload }))
        )        