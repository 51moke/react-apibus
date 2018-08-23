import React, { Component } from 'react'

// import apibus from 'apibus'
// import hook from 'hook-promise'

import log4web from 'log4web'

// import demo from './demo'

let log = log4web('ui.index')
log.debug('2222222222222222222222')
import('./demo.js').then(res => {
  log.debug(res.default())
})
class Demo extends Component {
  render () {
    return (
      <div className="Demo">
        demo
      </div>
    )
  }
}

export default Demo
