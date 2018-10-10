import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as  actoinCreators from '../store/actionCreators'
import { Link } from 'react-router-dom'
import {
  ListItem,
  ListInfo,
  ListMore
} from '../style'

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <div>
        {
          list.map((item, index)=>{
            return (
              <Link to={'/detail/'+item.get('id')} key={index}>
                <ListItem>
                  <img className="pic" src={item.get('imgUrl')} alt=""/>
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <ListMore onClick={()=>(getMoreList(page))}>更多文章</ListMore>
      </div>
    )
  }
}

const mapStateToPorps = state => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => {
  return {
    getMoreList(page) {
      const action = actoinCreators.getMoreList(page)
      dispatch(action)
    }
  }
}

export default connect(mapStateToPorps, mapDispatch)(List)