import hoot from 'hook-promise'
// import log4web from 'log4web'

// let log = log4web('service.hook')

hoot.register('init', () => {
  // log.debug('init')
  return 'hoot init'
})
