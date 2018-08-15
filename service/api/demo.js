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
    return {status_code: 0}
  }
  test2 () {
    return {status_code: 1, code: 'ERR_TEST', description: 'err test'}
  }
}

// api.Demo.test()
