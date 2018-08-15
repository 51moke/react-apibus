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
    return 'demo'
  }
}

// api.Demo.test()
