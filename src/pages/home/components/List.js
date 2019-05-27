import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from './store'

class List extends PureComponent {
  render () {
    const { list, getMoreList, page } = this.props
    return (
      <div>
        {list.map((item, index) => {
          return (
            <Link key={index} to={`/detail/${item.get('id')}`}>
              <ListItem>
                <img alt="图片" className="pic" src={item.get('imgurl')} />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="detail">{item.get('detail')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })}
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </div>
    )
  }
}
const mapState = state => ({
  list: state.getIn(['Home', 'articleList']),
  page: state.getIn(['Home', 'articalPage']),
})
const mapDispatch = dispatch => ({
  getMoreList (page) {
    dispatch(actionCreators.getMoreList(page))
  },
}) 
export default connect(mapState, mapDispatch)(List)
