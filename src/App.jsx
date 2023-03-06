import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './views/home/page'

const App = () => {
  return (
    <main>
      <Header bgcol='#46bc83' />
      <Home />
      <Footer />
    </main>
  )
}

export default App
