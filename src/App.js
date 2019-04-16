import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Header from './common/header'
import IconStyle from './statics/iconfont/iconfont'
import GlobalStyle from './style'
import store from './store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Header />
        <IconStyle />
        <GlobalStyle />
      </Provider>
    )
  }
}

export default App
