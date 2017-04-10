import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { apiMiddleware } from 'redux-api-middleware'
// import createLogger from 'redux-logger'
import rootReducers from './rootReducers'

const middlewares = [thunk, apiMiddleware]
// if(process.env.NODE_ENV !== 'production') middlewares.push(createLogger)

const storeEnhancer = [
	composeWithDevTools(
		applyMiddleware(...middlewares)
	)
]

const finalCreateStore = compose(...storeEnhancer)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(rootReducers, initialState)
}
