import * as constants from './constants'
import axios from 'axios'

const changeLogin = (account, password) => ({
  type: constants.CHANGE_LOGIN,
  login: true
})

export const logOut = () => ({
    type: constants.LOGOUT,
      login: false
})

export const login = (account, password) => {
  return dispatch => {
    axios.get('/api/login.json?account='+account+'&password='+password).then(res => {
      const action = changeLogin()
      dispatch(action)
    })

  }
}