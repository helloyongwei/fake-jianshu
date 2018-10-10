import * as constants from './constants'
import axios from 'axios'

const changeHomeData = result =>({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

export const getHomeInfo= ()=> {
  return dispatch => {
    axios.get('api/home.json').then(res => {
      console.log(res);
      const result = res.data.data
      const action = changeHomeData(result)
      dispatch(action)
    })
  }
}