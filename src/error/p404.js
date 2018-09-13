import React, { Component } from 'react'
import log4web from 'log4web'

let log = log4web('error.p404')

export default class P404 extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return false
  }
  render () {
    log.debug('404渲染！！！！！！！！！！！！！！！！')
    return <div>404</div>
  }
}
