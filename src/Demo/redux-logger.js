import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
  reduxLoggerTest,
} from '../redux/action'

function ReduxLogger() {
  const dispatch = useDispatch()

  //   useEffect(() => {
  //     dispatch(reduxLoggerTest())
  //   }, [])
  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(reduxLoggerTest('123'))}
      >+1
      </button>
    </div>
  )
}

export default ReduxLogger
