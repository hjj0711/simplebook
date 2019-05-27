// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable' // 将每个state都变成immutable对象 方便每组件中的mapStateToProps写发

import { reducer as headerReducer } from '../common/header/store'
import { reducer as Home } from '../pages/home/components/store'
import { reducer as Detail } from '../pages/detail/store'
import { reducer as Login } from '../pages/login/store'

export default combineReducers({
  Header: headerReducer,
  Home,
  Detail,
  Login,
})
