import React from 'react'
import isologo from '../../assets/isologo.png'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = ({ bgcol }) => {
  return (
    <header style={{ backgroundColor: bgcol || 'transparent' }}>
      <a className='logo-desktop' href='#'><img src={isologo} /></a>
      <a className='logo-mobile' href='#'><img src={logo} /></a>
      <nav>
        <a className='loginLink' href='#'>Ingresar</a>
        <a className='registerLink' href='#'>Registrarse</a>
      </nav>
    </header>
  )
}

export default Header
