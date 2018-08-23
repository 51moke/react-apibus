// import log4web from 'log4web'
import { Register } from 'apibus'

// let log = log4web('api.demo')

@Register('Demo')
export class Demo {
  test () {
    // log.debug('demo debug')
    // log.info('demo info')
    // log.warn('demo warn')
    // log.error('demo error')
    // log.fatal('demo fatal')
    if (Math.random() > 0.5) {
      return {status_code: 0}
    }
    return {status_code: 1, description: 'des...'}
  }
  test2 () {
    return {status_code: 1, code: 'ERR_TEST', description: 'err test'}
  }
}

// api.Demo.test()
