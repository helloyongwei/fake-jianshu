import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultValue = fromJS({
  title: '',
  content: ''
})

export default (state = defaultValue, action) => {
  switch(action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}