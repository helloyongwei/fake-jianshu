import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button } from "./styled";
import { actionCreators } from './store'

class Login extends PureComponent {
  render() {
    const { loginState, login} = this.props
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            输入任意账户或密码接口登录!
            <Input placeholder="请输入账号" innerRef={input => this.account = input}/>
            <Input placeholder="请输入密码" text="password" innerRef={input => this.password = input}/>
            <Button onClick={() => login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return (
        <Redirect to="/" />
      )
    }
  }
}

const mapState = state => ({
  loginState: state.getIn(['login', 'login'])
})

const mapProps = dispatch => ({
  login(account, password) {
    dispatch(actionCreators.login(account, password))
  }
})

export default connect(mapState, mapProps)(Login)