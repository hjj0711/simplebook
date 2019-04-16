// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable' // 讲每个state都变成immutable对象

import { reducer as headerReducer } from '../common/header/store'

export default combineReducers({
  Header: headerReducer,
})
