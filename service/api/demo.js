import log4web from 'log4web'
import { Register, api } from 'apibus'

let log = log4web('api.demo')

@Register('Demo')
export class Demo {
  test () {
    log.debug('demo debug')
    log.info('demo info')
    log.warn('demo warn')
    log.error('demo error')
    log.fatal('demo fatal')
  }
}

api.Demo.test()
