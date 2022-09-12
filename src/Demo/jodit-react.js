import React, { useState, useRef } from 'react'
import JoditEditor from 'jodit-react'

function JoditReact() {
  const editor = useRef(null)
  const [content, setContent] = useState('')

  const config = {
    readonly: false,
    placeholder: content || 'Start typings...',
  }

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export default JoditReact
