import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Header from './common/header'
import IconStyle from './statics/iconfont/iconfont'
import GlobalStyle from './style'
import store from './store'
import Body from './common/body'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Header />
        <Body />
        <GlobalStyle />
        <IconStyle />
      </Provider>
    )
  }
}

export default App
