import React, { Component } from 'react'
import log4web from 'log4web'

let log = log4web('error.end')

export default class End extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return false
  }
  render () {
    log.debug('end渲染！！！！！！！！！！！！！！！！')
    return <div>end</div>
  }
}
