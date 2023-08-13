import React from 'react'
import { Link } from 'wouter'
import isologo from '../../assets/isologo.png'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = ({ bgcol }) => {
  return (
    <header style={{ backgroundColor: 'transparent' }}>
      <Link href='/'><a className='logo-desktop' href='#'><img src={isologo} /></a></Link>
      <Link href='/'><a className='logo-mobile' href='#'><img src={logo} /></a></Link>
      <nav>
        <Link href='/login'><a className='loginLink'>Ingresar</a></Link>
        <Link href='/signup'><a className='registerLink' href='#'>Registrarse</a></Link>
      </nav>
    </header>
  )
}

export default Header
