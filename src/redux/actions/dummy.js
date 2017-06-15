// required constants
import { DUMMY_CONSTANT } from '../constants'

// export our action dispatch function
export default function dummyAction (payload) {
  return {
    type: DUMMY_CONSTANT,
    payload
  }
}