import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import * as actionCreators from './store/actionCreators'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from "./style";

class Home extends Component {
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
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
  }
}

const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  }
})

export default connect(null, mapDispatch)(Home)