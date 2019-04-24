// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable' // 将每个state都变成immutable对象 方便每组件中的mapStateToProps写发

import { reducer as headerReducer } from '../common/header/store'

export default combineReducers({
  Header: headerReducer,
})
