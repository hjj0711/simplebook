import axios from 'axios'
import { fromJS } from 'immutable' // 两者都可以把普通数组转化为immuitable数组
import * as constants from './constants'

const _changeHomeInfo = result => ({
  type: constants.CHANGE_HOME_LIST,
  articleList: result.articleList,
  appUrl: result.appUrl,
  articalImgs: result.articalImgs,
  topicList: result.topicList,
})
const _chaneMoreList = (list, nexPage) => ({
  type: constants.ADD_ARTICALS_LIST,
  list: fromJS(list),
  nexPage,
})

export const getHomeInfo = () => (
  (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      dispatch(_changeHomeInfo(res.data.data))
    })
  } 
)
export const getMoreList = page => ((dispatch) => {
  axios.get(`/api/homeList.json?page=${page}`).then((res) => {
    dispatch(_chaneMoreList(res.data.data, page + 1))
  })
}
)

export const isShowScroll = scrollTop => ({
  type: constants.CHANGE_SHOW_SCROLL,
  scrollTop: scrollTop > 400,
})
