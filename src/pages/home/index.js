import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  HomeWrapper, HomeLeft, HomeRight, BackTop, 
} from './style.js'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './components/store'
import { scrollAnimation } from '../../statics/utils/utils.js'


class Home extends PureComponent {
  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }
  
  // 滚动隐藏回到顶部
  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  // 回到顶部
  handleScrollTop () {
    const currentY = document.documentElement.scrollTop || document.body.scrollTop
    scrollAnimation(currentY, 0)
  }

  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="图片" className="banner_img" src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List /> 
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll && <BackTop onClick={this.handleScrollTop}>顶部</BackTop>}
      </HomeWrapper>    
    )
  }
}

const mapState = state => ({
  showScroll: state.getIn(['Home', 'showScroll']),
})
const mapDispatch = dispatch => ({ // 容器组件
  changeHomeData () {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow () {
    dispatch(actionCreators.isShowScroll(document.documentElement.scrollTop))
  },
})
export default connect(mapState, mapDispatch)(Home)
