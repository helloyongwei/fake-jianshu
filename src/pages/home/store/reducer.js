import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultValue = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})

export default (state = defaultValue, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    default:
      return state;
  }
}
