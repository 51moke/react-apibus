/**
 * Created by laomao on 2017/12/22.
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

// 中间件
const middlewares = [thunkMiddleware]
const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (window.devToolsExtension) ? window.devToolsExtension() : (f) => f
)

let demo = (state = {a: 100}, action) => {
  const { type, data } = action
  switch (type) {
    case '_g/StoreInfo/set':
      return { ...state, ...data }
    default:
      return state
  }
}

export const Store = createStore(
  combineReducers({ demo }),
  {},
  storeEnhancers
)
