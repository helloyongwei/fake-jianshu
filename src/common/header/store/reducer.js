import * as constants from './constants.js'
import { fromJS } from 'immutable'

const defaultValue = fromJS({
  focused: false
})

export default (state = defaultValue, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state;
}