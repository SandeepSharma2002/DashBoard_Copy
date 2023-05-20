import React from 'react'
import Board from './Board'
import "./LoginWindow.css"
import Authentication from './Authentication'

export default function LoginWindow() {
  return (
    <div className='Login_page'>
      <Board/>
      <Authentication/>
    </div>
  )
}
