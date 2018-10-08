import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchList,
  SearchItem,
  NavSearch,
  Addition,
  Button
} from './style.js'
import { connect } from 'react-redux'
import {actionCreators } from "./store/";

class Header extends Component {
  getListArea() {
    const { focused, list, mouseIn, page, totalPage, handleInputMouseEnter, handleInputMouseLeave, handleChangePage } = this.props
    const pageList = []

    if (list.size > 0) {
      for (let i = (page-1)*10; i < page*10; i++) {
        pageList.push(
          <SearchItem key={i}>{list.get(i)}</SearchItem>
        )
      }
    }

    if (focused || mouseIn ) {
      return (
        <SearchInfo
          onMouseEnter={handleInputMouseEnter}
          onMouseLeave={handleInputMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={()=>(handleChangePage(page, totalPage, this.spin))}
            >
              <i className="iconfont spin" ref={(spin)=>{this.spin = spin}}>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchList>
            {pageList}
          </SearchList>
        </SearchInfo>
      )
    } else {
      return null
    }

  }
  render() {
    const { focused, list, handleInputFocus, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={()=>handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i
              className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
            >&#xe6a3;</i>
            {this.getListArea()}
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
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    focused: state.getIn(['header', 'focused']),
    page: state.getIn(['header', 'page']),
    list: state.getIn(['header', 'list']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus(list) {
    (list.size === 0) && dispatch(actionCreators.getList())
    dispatch(actionCreators.searchFocus())
  },
  handleInputBlur() {
    const action = actionCreators.searchBlur()
    dispatch(action)
  },
  handleInputMouseEnter() {
    dispatch(actionCreators.mouseEnter())
  },
  handleInputMouseLeave() {
    dispatch(actionCreators.mouseLeave())
  },
  handleChangePage(page, totalPage, spin) {
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, "")
    if (originAngle) {
      originAngle = parseInt(originAngle, 10)
    } else {
      originAngle = 0
    }
    spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
    dispatch(actionCreators.changePage(((page+1)%totalPage)))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)