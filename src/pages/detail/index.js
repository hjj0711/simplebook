import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'

class Detail extends PureComponent {
  componentDidMount () {
    this.props.getDetailList(this.props.match.params.id)
  }

  render () {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }
}

const mapState = state => ({
  title: state.getIn(['Detail', 'title']),
  content: state.getIn(['Detail', 'content']),
})
const mapDispatch = dispatch => ({
  getDetailList (id) {
    dispatch(actionCreators.getDetailList(id))
  },
})

export default connect(mapState, mapDispatch)(Detail)
