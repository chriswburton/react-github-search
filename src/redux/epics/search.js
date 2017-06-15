// required module imports and constants
import { mapTo } from 'rxjs/add/operator/mapTo';
import { SEARCH_USERS } from '../constants';

// export our epic
export default (action$, state) => action$.ofType(SEARCH_USERS).mapTo({type: 'TEMP'});