// required constants
import { SEARCH_USERS } from '../constants'

// export each available action as a dispatch function
export function searchUsers (username) {
  return {
    type: SEARCH_USERS,
    payload: username
  }
}