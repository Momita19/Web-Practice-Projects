import './stylingSheet.css'
import React from 'react'
// import './mediaQueries.css'
export default function Heading(props) {
  return (
    <div className='heading1'>
      {props.content}
    </div>
  )
}
