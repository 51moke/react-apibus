import '../service/index.js'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import hook from 'hook-promise'
import log4web from 'log4web'
import {api} from 'apibus'

let log = log4web('ui.index')

log.time('init')
hook.call('init').then(res => {
  log.timeEnd('init')
  log.debug(res)

  // api demo
  api.Demo.test()
    .then(res => {
      log.debug('res', res)
    })
    .catch(err => {
      log.warn('err', err)
    })

  api.Demo.test2()
    .then(res => {
      log.debug('res', res)
    })
    .catch(err => {
      log.warn('err', err)
    })

  log.debug('react init')
  ReactDOM.render(<App />, document.getElementById('root'))
  registerServiceWorker()
})
