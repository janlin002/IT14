import React from 'react'
import {
  useDispatch,
} from 'react-redux'

import {
  reduxThunkTest,
} from '../redux/action'

function ReduxThunk() {
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(reduxThunkTest())} type="button">
      點擊
    </button>
  )
}

export default ReduxThunk
