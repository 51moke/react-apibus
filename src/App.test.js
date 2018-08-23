import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('demo', () => {

})

// describe('actions', () => {
//   it('should return object when invoked', () => { })
//   // 可以有更多的 it函数调用
// })
