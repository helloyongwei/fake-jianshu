import React from 'react'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style.js'
import { connect } from 'react-redux'
import {actionCreators } from "./store/";

const Header = (props) => (
  <HeaderWrapper>
    <Logo></Logo>
    <Nav>
      <NavItem className="left active">首页</NavItem>
      <NavItem className="left">下载App</NavItem>
      <SearchWrapper>
        <CSSTransition
          timeout={200}
          in={props.focused}
          classNames="slide"
        >
          <NavSearch
            className={props.focused ? 'focused' : ''}
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
          ></NavSearch>
        </CSSTransition>
        <i
          className={props.focused ? 'focused iconfont' : 'iconfont'}
        >&#xe6a3;</i>
      </SearchWrapper>
      <NavItem className="right">登录</NavItem>
      <NavItem className="right">
        <i className="iconfont">&#xe607;</i>
      </NavItem>
    </Nav>
    <Addition>
      <Button className="writting">
        <i className="iconfont">&#xe619;</i>
        写文章
      </Button>
      <Button className="reg">注册</Button>
    </Addition>
  </HeaderWrapper>
)

const mapStateToProps = (state, ownProps) => {
  return {
    focused: state.header.get('focused')
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus() {
    const action = actionCreators.searchFocus()
    dispatch(action)
  },
  handleInputBlur() {
    const action = actionCreators.searchBlur()
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)