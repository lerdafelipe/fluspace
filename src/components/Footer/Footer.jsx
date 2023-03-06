import React from 'react'
import { IgIcon, MailIcon, WppIcon } from '../../icons/icons'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <a className='footerPolitics' href='/'>Politicas de privacidad.</a>
      <footer className='footer'>
        <div className='footerEffect'>
          <span />
        </div>
        <div className='footerContainersFlex'>
          <div className='div33'>
            <a className='copyright' href='/'>© Fluspace</a>
          </div>
          <div className='div33'>
            <a className='privacy' href='/'>Politicas de cookies y privacidad</a>
            <a className='terms' href='/'>Términos y condiciones</a>
          </div>
          <div className='div33'>
            <a href='/'><WppIcon /></a>
            <a href='/'><IgIcon /></a>
            <a href='/'><MailIcon /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
