import React from 'react'

import './button.css'
function Button({text}) {
  return (
    <div className='button'>
      <h1 className='button_text'>{text}</h1>
    </div>
  )
}

export default Button