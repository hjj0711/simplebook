import React, { Component } from 'react'
import Header from './common/header'
import IconStyle from './statics/iconfont/iconfont'
import GlobalStyle from './style'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <IconStyle />
        <GlobalStyle />
      </React.Fragment>
    )
  }
}

export default App
