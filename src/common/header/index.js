import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

import {
  HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,
} from './style'

const Header = (props) => {
  const { focused } = props
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
                onFocus={props.handleInputFocus} 
                onBlur={props.handleInputBlur}
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
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    },
  }
}
const mapStateToProps = (state) => {
  // return { focused: state.get('Header').get('focused') }  // 和以下、代码一样
  return { focused: state.getIn(['Header', 'focused']) }
}
export default connect(mapStateToProps, mapDispathToProps)(Header)
