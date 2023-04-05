import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './views/home/page'
import { Route } from 'wouter'
import Login from './views/login/page'
import Registro from './views/signup/page'
import Dashboard from './views/dashboard/page'

const App = () => {
  return (
    <main>
      <Header bgcol='#46bc83' />

      <Route path='/'><Home /></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/signup'><Registro /></Route>
      <Route path='/dashboard'><Dashboard /></Route>

      <Footer />
    </main>
  )
}

export default App
