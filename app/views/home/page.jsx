import React from 'react'
import './Home.css'
import { AccountIcon, EyeIcon, MoneyIcon, SvgSocialHome, SvgSocialTree, Waves } from '../../icons/icons'

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home
