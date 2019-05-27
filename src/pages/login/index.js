import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {
  LoginWrapper, LoginBox, Input, Button, LoginTap, Problemwrapper,
} from './style'
import { actionCreators } from './store'

class Login extends PureComponent {
  render () {
    const { loginStatus } = this.props
    if (!loginStatus) { 
      return ( 
        <LoginWrapper>
          <LoginBox>
            <LoginTap>
              <span>登陆</span>
              <span>·</span>
              <span>注册</span>
            </LoginTap>
            <Input placeholder="账号" ref={(input) => { this.account = input }} />
            <Input placeholder="密码" type="password" ref={(input) => { this.password = input }} />
            <Problemwrapper>
              <input type="checkbox" placeholder="123" />
              <span>记住我</span>
              <a>等于遇到问题？</a>
            </Problemwrapper>
            <Button onClick={() => this.props.login(this.account.value, this.password.value)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>

      ) 
    }
    return <Redirect to="/" />
  }
}

const mapState = state => ({
  loginStatus: state.getIn(['Login', 'login']),
})
const mapDispatch = dispatch => ({ // 容器组件
  login (account, password) {
    dispatch(actionCreators.login(account, password))
  },
})
export default connect(mapState, mapDispatch)(Login)
