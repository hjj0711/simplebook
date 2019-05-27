import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

import {
  HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitile, SearchInfoSwitch,
  SearchInfoItem,
} from './style'

class Header extends Component {
  render () {
    const { focused, handleInputFocus, handleInputBlur } = this.props
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
                  onFocus={handleInputFocus} 
                  onBlur={handleInputBlur}
                />
                <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60d;</i>
              </React.Fragment>
            </CSSTransition>
            {this.getListArea()}
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

  getListArea () {
    const {
      focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage,
    } = this.props
    const pageList = []
    const jsList = list.toJS() // 由于jslist是imuitable类型， 不能直接jslist[i]这样去数据 必须转换

    if (focused || mouseIn) {
      if (jsList.length > 0) {
        for (let i = (page - 1) * 10; i < page * 10; i++) {
          if (page === totalPage && i === jsList.length) break // 最后一页 最后一个值 不渲染
          pageList.push(
            <div key={jsList[i]}><SearchInfoItem>{jsList[i]}</SearchInfoItem></div>
          )
        }
      }
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitile>
            <span>热门搜索</span>
          </SearchInfoTitile>
          <SearchInfoSwitch onClick={event => handleChangePage(page, totalPage, this.spinIcon, event)}>
            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe606;</i>                                                                                                                                
            <span>换一批</span>
          </SearchInfoSwitch>
          {pageList}
        </SearchInfo>
      )
    }
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleMouseEnter () { // 鼠标移入触发action
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage (page, totalPage, spin, event) {
      event.stopPropagation()
      const originAngle = spin.style.transform.replace(/[^0-9]/ig, '')// 获取transform 的选择角度。。非数字替换为空
      spin.style.transform = originAngle === '360' ? 'rotate(720deg)' : 'rotate(360deg)'
      dispatch(actionCreators.changePage(page = (page < totalPage) ? page + 1 : 1))
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    },
  }
}
const mapStateToProps = (state) => {
  // return { focused: state.get('Header').get('focused') }  // 和以下、代码一样
  return {
    focused: state.getIn(['Header', 'focused']),
    list: state.getIn(['Header', 'list']),
    page: state.getIn(['Header', 'page']),
    mouseIn: state.getIn(['Header', 'mouseIn']),
    totalPage: state.getIn(['Header', 'totalPage']),
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header)
