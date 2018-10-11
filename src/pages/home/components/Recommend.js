import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Img from '../../../statics/banner.png'
import {
  RecommendWrapper,
  RecommendItem
} from '../style'

class Recommend extends PureComponent {
  render() {
    const { list } = this.props
    return (
      <RecommendWrapper>
        {
          list.map((item)=>{
            return (
              <RecommendItem key={item.get('id')} imgUrl={Img}></RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapStateToProps, null)(Recommend)