import React from 'react'
import Joyride from 'react-joyride'

function ReactJoyride() {
  const steps = [
    {
      title: '我是標題',
      target: '.my-other-step',
      content: '我是內容',
      hideCloseButton: false,
      disableBeacon: false,
      locale: {
        back: '上一步',
        next: '下一步',
        skip: '跳過',
        close: '關閉',
      },
    },
    {
      title: '我是標題1',
      target: '.my-first-step',
      content: '我是內容1',
      hideCloseButton: false,
      disableBeacon: false,
      locale: {
        next: '下一步',
        skip: '跳過',
        close: '關閉',
      },
    },

  ]
  return (
    <>
      <Joyride
        steps={steps}
        run // 如果false就不再有效果，預設為true
      />
      <button type="button" className="my-first-step">1</button>
      <button type="button" className="my-other-step">2</button>
    </>
  )
}

export default ReactJoyride
