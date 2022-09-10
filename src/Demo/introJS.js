import React, { useState } from 'react'
import { Steps, Hints } from 'intro.js-react'

import '../styles.css'
import 'intro.js/introjs.css'

function IntroJS() {
  const [enabled, setEnabled] = useState(true)

  const onExit = () => {
    setEnabled(false)
  }

  const steps = [
    {
      element: '#help',
      intro: 'You can use this button for help',
      position: 'right',
    },
    {
      element: '#about',
      intro: 'You can use this button to get more information',
    },
    {
      element: '#contact',
      intro: 'You can use this button to contact us',
    },
  ]

  return (
    <div>
      <div className="App">
        <Steps
          enabled={enabled}
          steps={steps}
          initialStep={0}
          onExit={onExit}
        />
        <div id="buttonRow">
          <button id="help">Help</button>
          <button id="about">About</button>
          <button id="contact">Contact Us</button>
        </div>
      </div>

    </div>
  )
}

export default IntroJS
