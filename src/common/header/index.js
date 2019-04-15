import React from 'react'
import { CSSTransition } from 'react-transition-group'

import {
  HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,
} from './style'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      focused: false,
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  render () {
    const { focused } = this.state
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={600}
              classNames="slide"
            >
              <React.Fragment>
                <NavSearch className={focused ? 'focused' : ''}
                  onFocus={this.handleInputFocus} 
                  onBlur={this.handleInputBlur}
                />
                <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60d;</i>

              </React.Fragment>
            </CSSTransition>
          </SearchWrapper>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Button className="writing">
            <span className="iconfont">&#xe6a5;</span>
            <span>&nbsp;写文章</span>
          </Button>
          <Button className="reg"> 注册</Button>
        </Addition>
      </HeaderWrapper>
    ) 
  }

  handleInputFocus () {
    this.setState({ focused: true })
  }

  handleInputBlur () {
    this.setState({ focused: false })
  }
}
export default Header
