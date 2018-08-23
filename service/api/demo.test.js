import { Demo } from './demo'

describe('demo.js', () => {
  let demo = new Demo()
  it('service.api.demo', () => {
    demo.test().then(res => {
      expect(res.status_code === 0 || (res.status_code === 1 && res.description && typeof res.description === 'string')).toBe(true)
    })

    // expect(demo.test()).resolves.toEqual({status_code: 0})
  })
})
