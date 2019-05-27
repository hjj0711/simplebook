import axios from 'axios'
import { fromJS } from 'immutable' // 两者都可以把普通数组转化为immuitable数组
import * as constants from './constants'

const _changeDetailList = data => ({
  type: constants.GET_DETAIL_LIST,
  title: data.title,
  content: data.content,
})

export const getDetailList = id => (
  (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`).then((res) => {
      dispatch(_changeDetailList(res.data.data))
    }).catch(() => { alert('请求失败了') })
  }
)
