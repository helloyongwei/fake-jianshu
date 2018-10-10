import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import * as actionCreators from './store/actionCreators'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from "./style";

class Home extends PureComponent {
  handleBackTop() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4494/9d9f6188aff3634c9fb99ec0f68299d509faae48.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleBackTop}><i className="iconfont">&#xe61b;</i></BackTop> : null
        }
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.handleShowTop)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.handleShowTop)
  }
}

const mapState = state => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  handleShowTop() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)