import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultValue = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1
})

export default (state = defaultValue, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case constants.ADD_ARTICLE:
      return state.merge({
        'articleList': state.get('articleList').concat(action.articleList),
        'articlePage': action.nextPage
      })
    default:
      return state;
  }
}
