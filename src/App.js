import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import IconStyle from './statics/iconfont/iconfont'
import GlobalStyle from './style'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          {/* exact是地址完全匹配 */}
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={Detail} />
        </BrowserRouter>
        <GlobalStyle />
        <IconStyle />
      </Provider>
    )
  }
}

export default App
