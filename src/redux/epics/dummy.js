// required module imports and constants
import { mapTo } from 'rxjs/add/operator/mapTo';
import { DUMMY_CONSTANT } from '../constants'

// export our epic
export default (action$, state) => action$.ofType(DUMMY_CONSTANT).mapTo({type: DUMMY_CONSTANT});