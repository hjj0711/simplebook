import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TopicWapprer, TopicItem } from '../style'

class Topic extends PureComponent {
  render () {
    const { list } = this.props
    return (
      <TopicWapprer>
        {list.map(item => (
          <TopicItem key={item.get('id')}>
            <img
              alt="图片"
              className="top_pic"
              src={item.get('imgurl')}
            /> 
            {item.get('title')}
          </TopicItem>
        ))
      } 
      </TopicWapprer>
    )
  }
}

const mapState = state => ({ // 从store拿数据   这是immulatable 对象 注意使用
  // list: state.getIn(['Home', 'topicList']),
  list: state.get('Home').get('topicList'),
})
export default connect(mapState, null)(Topic)
