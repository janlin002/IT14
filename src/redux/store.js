import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
// import { mySaga } from './saga'

// const sagaMiddleware = createSagaMiddleware()

// For thunk
const store = createStore(reducer, applyMiddleware(thunk, logger))

// For saga
// const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))
import reducer from './reducer'
// import { mySaga } from '../saga'

// const sagaMiddleware = createSagaMiddleware()

// const store = createStore(reducer, applyMiddleware(logger))
export default store

// sagaMiddleware.run(mySaga)
