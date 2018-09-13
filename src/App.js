import React, { Component } from 'react'
import {
  // MemoryRouter as Router,
  HashRouter as Router,
  Route,
  // Redirect,
  // Link,
  Switch
} from 'react-router-dom'

import { Store } from './redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createHashHistory'
import { G } from 'apibus'
import P404 from './error/p404'
import log4web from 'log4web'

let log = log4web('ui.App')

class Main extends Component {
  constructor () {
    super()
    this.state = {
      title: '默认标题!!!!!!!!'
    }
  }
  updated () {
    this.setState({
      title: '更新标题'
    })
  }
  render () {
    log.debug('props', this.props)
    let { match } = this.props
    return (
      <div>
        <h1>{this.state.title}</h1>
        <G.onCollect id="App.demo1" name="点击按钮测试">
          <span onClick={() => {
            this.updated()
            log.debug('被点击了！！！！！！！！！！！！！11111111111111!!!!!!!!!!!!')
            return Promise.resolve()
          }}>10000</span>
        </G.onCollect>
        <G.onCollect id="App.demo2" name="点击按钮测试">
          <span onClick={() => {
            log.debug('被点击了！！！！！！！！！！！！！22222222222222!!!!!!!!!!!')
          }}>10000</span>
        </G.onCollect>
        <G.onCollect id="App.demo3" name="输入框测试">
          <input type="text"

            onKeyPress={(el) => {
              log.debug('key', el.keyCode, el.key)
            }}
            onChange={(el) => {
              log.debug('input', el.target.value)
            }} />
        </G.onCollect>
        <Switch><Route exact path={`${match.url}/demo/:id`} component={Demo} /></Switch>
      </div>
    )
  }
}

let Demo = (...props) => {
  log.debug('demo!!!!!!!!!!!!!!', props)
  return <div>demo</div>
}

// 监听路由变化
let watchRouter = () => {
  let _history = createHistory()
  let pathname = _history.location.pathname
  if (pathname === '/demo') {
    log.debug('拦截/demo,跳转到/aaa')
    _history.push('/aaa')
    return
  }
  log.debug('url:', pathname)
}
watchRouter()
// 监听window的hash的变化，驱动页面的重新刷新
window.addEventListener('hashchange', watchRouter)

class App extends Component {
  render () {
    log.debug('app ui start')
    return (
      <Provider store={Store}>
        <div className="root">
          <div className="app-pup">app-pup</div>
          <div className="app-page">
            <Router>
              <Switch>
                <Route path="/main" component={Main} />
                <Route exact path="/demo" component={Demo} />
                <Route component={P404} />
              </Switch>
            </Router>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
