import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeHomeData = result =>({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

const addHomeList = (result, page)=>({
  type: constants.ADD_ARTICLE,
  articleList: fromJS(result.articleList),
  nextPage: page
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

export const getMoreList = (page)=> {
  return (dispatch) => {
    axios.get('api/homeList.json?page='+page).then(res=>{
      const result = res.data.data
      const action = addHomeList(result, page+1)
      dispatch(action)
    })
  }
}