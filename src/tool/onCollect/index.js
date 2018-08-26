import apibus from 'apibus'
import React from 'react'
import log4web from 'log4web'
let log = log4web('aaaaaaaaa')

let onData = {}
window.onData = onData

class onCollect extends React.Component {
  componentWillMount () {
    log.debug('装载', this.props.id, this.props.children.type)
    let id = this.props.id
    let type = this.props.children.type
    let name = this.props.name
    let children = this.props.children

    onData[id] = {
      type,
      name
    }
    let isOnClick = (type !== 'input')
    if (isOnClick) {
      let onClick = this.props.children.props.onClick
      onData[id].onClick = onClick
      onData[id].on = 'onClick'
      let props = {
        ...children.props,
        onClick: (...args) => {
          log.debug('拦截事件了', this.props.id)
          onClick(...args)
        }
      }
      this.children = { ...children, props }
    } else {
      let onChange = children.props.onChange

      onData[id].onChange = onChange
      onData[id].on = 'onChange'

      let props = {
        ...children.props,
        onChange: (...args) => {
          let el = args[0]
          log.debug('监听input变化', this.props.id, el.target.value)
          onChange(...args)
        }
      }
      this.children = { ...children, props }
      log.debug('new', this.children, children.refs)
    }
  }

  componentWillUnmount () {
    log.debug('卸载', this.props.id)
    delete onData[this.props.id]
  }

  shouldComponentUpdate (nextProps, nextState) {
    return false
  }

  render () {
    // log.debug('更新!!!!!!!!!!!!!')
    return <React.Fragment>{this.children}</React.Fragment>
  }
}

apibus.SetStore('onCollect', onCollect)
