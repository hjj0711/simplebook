import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constants'

const _changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10), // math.ceil 取整的作用
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
})
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
})
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER,
})
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE,
})
export const changePage = page => ({
  type: constants.CHANGE_PAGE,
  page,
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      dispatch(_changeList(res.data.data))
    }).catch((res) => { console.log(res) })
  }
}
