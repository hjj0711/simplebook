import React, { Component } from 'react'
import hoc from './hoc'


class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hi: 'hi',
    }
  }
  
  render () {
    console.log(this.props)
    return (
      <h1>UI组件</h1>
    )
  }
}
export default hoc(Body)
