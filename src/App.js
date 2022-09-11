/* eslint-disable react/button-has-type */
import React from 'react'
import {
  HashRouter as Router, Routes, Route, Link,
} from 'react-router-dom'

import FormikYup1 from './Demo/formik-yup1'
import FormikYup2 from './Demo/formik-yup2'
import ReactHookForm from './Demo/react-hook-form'
import JSDOC from './Demo/jsdoc'
import IntroJS from './Demo/introJS'
import IntroJSHints from './Demo/introJS-Hints'
import ReduxLogger from './Demo/redux-logger'
import ReduxThunk from './Demo/redux-thunk'
import ReactModal from './Demo/react-modal'

function Header() {
  return (
    <div>
      <button>
        <Link to="/formik-yup-1">
          Formik+Yup
        </Link>
      </button>
      <button>
        <Link to="/formik-yup-2">
          Formik+Yup-2
        </Link>
      </button>
      <button>
        <Link to="/react-hook-form">
          react-hook-form
        </Link>
      </button>
      <button>
        <Link to="/js-doc">
          JSDOC
        </Link>
      </button>
      <button>
        <Link to="/intro-js">
          IntroJS
        </Link>
      </button>
      <button>
        <Link to="/intro-js-hints">
          IntroJSHints
        </Link>
      </button>
      <button>
        <Link to="/redux-logger">
          ReduxLogger
        </Link>
      </button>
      <button>
        <Link to="/redux-thunk">
          ReduxThunk
        </Link>
      </button>
      <button>
        <Link to="/react-modal">
          ReactModal
        </Link>
      </button>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/formik-yup-1" element={<FormikYup1 />} />
        <Route path="/formik-yup-2" element={<FormikYup2 />} />
        <Route path="/react-hook-form" element={<ReactHookForm />} />
        <Route path="/js-doc" element={<JSDOC />} />
        <Route path="/intro-js" element={<IntroJS />} />
        <Route path="/intro-js-hints" element={<IntroJSHints />} />
        <Route path="/redux-logger" element={<ReduxLogger />} />
        <Route path="/redux-thunk" element={<ReduxThunk />} />
        <Route path="/react-modal" element={<ReactModal />} />
      </Routes>
    </Router>
  )
}

export default App
