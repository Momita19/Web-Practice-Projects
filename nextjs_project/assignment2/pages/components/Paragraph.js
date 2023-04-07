import React from 'react'
import './stylingSheet.css'

export default function Paragraph(props) {
  return (
    <div className='para'>
      {props.content}
    </div>
  )
}
