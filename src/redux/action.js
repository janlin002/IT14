import {
  REDUX_LOGGER_TEST,
  REDUX_THUNK_TEST,
} from './ActionTypes'

export const reduxLoggerTest = (payload) => ({
  type: REDUX_LOGGER_TEST,
  payload,
})

export const reduxThunkTest = (payload) => async (dispatch) => {
  setTimeout(() => {
    dispatch({ type: REDUX_THUNK_TEST, payload })
  }, 1000)
}
