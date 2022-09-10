import {
  REDUX_LOGGER_TEST,
  REDUX_THUNK_TEST,
} from './ActionTypes'

const defaultState = {
  count: 0,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case REDUX_LOGGER_TEST:
      return {
        ...state,
        count: state.count + 1,
      }
    case REDUX_THUNK_TEST:
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state
  }
}

export default reducer
