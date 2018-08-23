import {api} from 'apibus'
import './index'
import '../api'

describe('拦截器入口', () => {
  it('service.intercept.rejects', () => {
    expect(api.Demo.rejects()).rejects.toEqual({status_code: 1, code: 'ERR_TEST', description: 'err rejects'})
    // expect(demo.test()).resolves.toEqual({status_code: 0})
  })
  it('service.intercept.resolves', () => {
    expect(api.Demo.resolves()).resolves.toEqual({status_code: 0})
    // expect(demo.test()).resolves.toEqual({status_code: 0})
  })
})
