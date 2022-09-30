import React from 'react'
import { jsPDF } from 'jspdf'

function JSPDF() {
  const doc = new jsPDF()

  doc.setFontSize(100)
  doc.text('Hello world!', 10, 10)

  doc.setFontSize(50)
  doc.text('Hello world!', 10, 20)

  doc.save('a4.pdf')
  return (
    <div>JSPDF</div>
  )
}

export default JSPDF
