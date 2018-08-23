// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'

// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App />, div)
//   ReactDOM.unmountComponentAtNode(div)
// })

// it('demo', () => {

// })

// describe('actions', () => {
//   it('should return object when invoked', () => { })
//   // 可以有更多的 it函数调用
// })

import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('renders without crashing', () => {
  shallow(<App />)
})

it('renders welcome message', () => {
  const wrapper = shallow(<App />)
  const welcome = <h2>Welcome to React</h2>
  // expect(wrapper.contains(welcome)).to.equal(true);
  // expect(wrapper.contains(welcome)).toEqual(true)
  expect(wrapper).toContainReact(welcome)
})
