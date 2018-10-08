import * as constants from './constants.js'
import { fromJS } from 'immutable'

import axios from 'axios'

const changeList = (data, totalPage) => {
  return {
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: fromJS(totalPage)
  }
}

export const searchFocus = () => {
  return {
    type: constants.SEARCH_FOCUS
  }
}

export const searchBlur = () => {
  return {
    type: constants.SEARCH_BLUR
  }
}

export const getList = () => {
  return (dispatch)=>{
    axios.get('api/getList.json').then((res)=>{
      const data = res.data.data
      const totalPage = Math.ceil(data.length / 10)
      const action = changeList(data, totalPage)
      dispatch(action)
    })
  }
}

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})

export const changePage = (page) => {
  return {
    type: constants.CHANGE_PAGE,
    page
  }
}