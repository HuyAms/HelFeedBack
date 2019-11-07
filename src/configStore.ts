/**
 * Config redux store
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import {createStore, applyMiddleware, compose} from 'redux'
import createRootReducer from './modules/reducers'
import thunk from 'redux-thunk'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const configureStore = (preloadedState?: any) => {
  const isDevelopment = process.env.NODE_ENV === 'development'

  // Config redux devtool in development

  const composeEnhancers =
    (isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

  // Middlewares

  const middlewares = [thunk]

  if (isDevelopment) {
    // tslint:disable-next-line:no-var-requires
    const {createLogger} = require('redux-logger')
    const logger = createLogger()
    middlewares.push(logger)
  }

  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  return store
}

export {configureStore}
