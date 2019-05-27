import { fromJS } from 'immutable'
import * as constants from './constants'

// fromJS把里面的对象改为immuitable对象
const defaultState = fromJS({
  login: false,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN: 
      return state.set('login', action.value)
    case constants.LOGOUT: 
      return state.set('login', action.value)
    default:
      return state
  }
}
