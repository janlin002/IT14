import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import reducer from './reducer'
// import createSagaMiddleware from 'redux-saga';
// import { mySaga } from '../saga'

// const sagaMiddleware = createSagaMiddleware()

// const store = createStore(reducer);
const store = createStore(reducer, applyMiddleware(logger))
export default store

// sagaMiddleware.run(mySaga)
