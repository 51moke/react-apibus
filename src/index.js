import '../service/index.js'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import hook from 'hook-promise'
import log4web from 'log4web'

let log = log4web('ui.index')

log.time('init')
hook.call('init').then(res => {
  log.timeEnd('init')
  log.debug(res)
  ReactDOM.render(<App />, document.getElementById('root'))
  registerServiceWorker()
})
