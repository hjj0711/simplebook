import { fromJS } from 'immutable'
import * as constants from './constants'
// fromJS把里面的对象改为immuitable对象
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  mouseIn: false,
  totalPage: 0,
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST: 
      return state.merge({
        list: action.data,
        totalPage: action.totalPage,
      })
      // return state.set('list', action.data)
      //   .set('totalPage', action.totalPage)
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}
