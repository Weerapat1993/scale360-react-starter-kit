import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { apiMiddleware } from 'redux-api-middleware'
// import createLogger from 'redux-logger'
import rootReducers from './rootReducers'

const middlewares = [thunk]
// if(process.env.NODE_ENV !== 'production') middlewares.push(createLogger)

const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

export default store;
