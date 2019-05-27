import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends PureComponent {
  render () {
    const { articalImgs } = this.props
    return (
      <RecommendWrapper>
        {articalImgs.map(item => (<RecommendItem imgurl={item.get('url')} key={item.get('id')} />))}
      </RecommendWrapper>
    )
  }
}
const mapState = state => ({  
  articalImgs: state.getIn(['Home', 'articalImgs']),
})
export default connect(mapState, null)(Recommend)
