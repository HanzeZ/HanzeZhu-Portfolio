import React from 'react'

import './headertoggle.css'

function Headertoggle({handler,open}) {
  return (
    <div className='header_toggle'>
        {open ? null : <h1 onClick={handler}>≡</h1>}
    </div>
  )
}

export default Headertoggle