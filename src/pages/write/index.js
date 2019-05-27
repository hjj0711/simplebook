import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class Write extends PureComponent {
  render () {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return <Redirect to="/login" />
    }
    return ('写文章把')
  }
}

const mapState = state => ({
  loginStatus: state.getIn(['Login', 'login']),
})
export default connect(mapState, null)(Write)
