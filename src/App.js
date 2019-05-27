import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import IconStyle from './statics/iconfont/iconfont'
import GlobalStyle from './style'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'

class App extends Component {
  render () {
    return (
      // Provider使得其store内部组件能够使用store
      <Provider store={store}> 
        <BrowserRouter>
          <Header />
          {/* exact是地址完全匹配 */}
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/login/" exact component={Login} />
          <Route path="/write/" exact component={Write} />
        </BrowserRouter>
        <GlobalStyle />
        <IconStyle />
      </Provider>
    )
  }
}

export default App
