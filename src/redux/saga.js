import {
  call, takeLatest,
} from 'redux-saga/effects'

import {
  REDUX_LOGGER_TEST,
} from './ActionTypes'

import FAKE_SAGA_API from './FAKE_SAGA_API'

function getSagaTestApi() {
  // 可以把打api的方法寫在這
  return FAKE_SAGA_API
}

function* reduxLoggerTestSaga() {
  try {
    const response = yield call(getSagaTestApi)
    console.log(response)
  } catch (err) {
    console.error(err)
  }
}

// 當今天 REDUX_LOGGER_TEST 被觸發後，執行reduxLoggerTestSaga()
export function* mySaga() {
  yield takeLatest(REDUX_LOGGER_TEST, reduxLoggerTestSaga)
}

export default mySaga
