import React from 'react'
import './App.css'
import { AccountIcon, EyeIcon, IgIcon, MailIcon, MoneyIcon, SvgSocialHome, SvgSocialTree, Waves, WppIcon } from './icons/icons'
import isologo from './assets/isologo.png'
import logo from './assets/logo.png'

const App = () => {
  return (
    <main>
      <header>
        <a className='logo-desktop' href='#'><img src={isologo} /></a>
        <a className='logo-mobile' href='#'><img src={logo} /></a>
        <nav>
          <a className='loginLink' href='#'>Ingresar</a>
          <a className='registerLink' href='#'>Registrarse</a>
        </nav>
      </header>
      <section className='titlesContainer'>
        <h1>Monetiza tu llegada como influencer</h1>
        <h2>Create un perfil, permite a las empresas a encontrarte y múltiplica tus ingresos como creador de contenido.</h2>
        <a className='registerLinkBig' href='#'>Crear cuenta</a>
      </section>
      <Waves />
      <section className='svgContainer'>
        <SvgSocialHome />
        <SvgSocialTree />
      </section>
      <section className='howWork'>
        <aside>
          <AccountIcon />
          <h4>Crear una cuenta</h4>
          <h5>Completa los datos de tu cuenta, de contacto, etc.</h5>
        </aside>
        <aside>
          <EyeIcon />
          <h4>Las empresas te verán.</h4>
          <h5>Los departamentos de marketing de las empresas te podrán ver y contactarte</h5>
        </aside>
        <aside>
          <MoneyIcon />
          <h4>Monetiza tu contenido</h4>
          <h5>Multiplicarás tus ingresos al lograr que las empresas inviertan en tu llegada al público.</h5>
        </aside>
      </section>
      <a className='registerLinkBig' href='#'>Crear cuenta</a>
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
    </main>
  )
}

export default App
