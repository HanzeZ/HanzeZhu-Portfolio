import React from 'react'
import { Link } from 'react-router-dom';

import './header.css'

import Button from '../buttons/button'
function Header({handler}) {
  return (
    <div onClick={handler} className='header'>
      <a href='https://www.google.com' target='_blank' rel='noopener'>
        <Button className='header_button' text='About'/>
      </a>
      <a href='https://cdn.discordapp.com/attachments/701704635790000238/966528510166466681/Hanze_Zhu_Resume_FrontEnd.pdf'>
        <Button className='header_button' text='Resume'/>
      </a>
      <a>
        <Button className='header_button' text='More'/>
      </a>
    </div>
  )
}

export default Header;