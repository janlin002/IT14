import React from 'react'
import { Hints } from 'intro.js-react'

function IntroJSHints() {
  const hints = [
    {
      element: '#help',
      hint: 'You can use this button for help',
      position: 'right',
    },
    {
      element: '#about',
      hint: 'You can use this button to get more information',
    },
    {
      element: '#contact',
      hint: 'You can use this button to contact us',
    },
  ]
  return (
    <>
      <Hints
        enabled
        hints={hints}
      />
      <div id="buttonRow">
        <button id="help">Help</button>
        <button id="about">About</button>
        <button id="contact">Contact Us</button>
      </div>
    </>
  )
}

export default IntroJSHints
