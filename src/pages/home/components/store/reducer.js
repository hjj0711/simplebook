import { fromJS } from 'immutable'
import * as constants from './constants'

// fromJS把里面的对象改为immuitable对象
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  appUrl: '',
  articalImgs: [],
  articalPage: 1,
  showScroll: false,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_LIST:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        appUrl: fromJS(action.appUrl),
        articalImgs: fromJS(action.articalImgs),
      })
    case constants.ADD_ARTICALS_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articalPage: action.nexPage,
      })
    case constants.CHANGE_SHOW_SCROLL:
      return state.set('showScroll', action.scrollTop)
    default:
      return state
  }
}
