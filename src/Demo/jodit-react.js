import React, { useState, useRef } from 'react'
import JoditEditor from 'jodit-react'

function JoditReact() {
  const editor = useRef(null)
  const [content, setContent] = useState('')

  const config = {
    readonly: false,
    placeholder: content || 'Start typings...',
  }

  //   console.log(content, 'content')
  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
    //   tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)}
        // onChange={(newContent) => {}}
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export default JoditReact
