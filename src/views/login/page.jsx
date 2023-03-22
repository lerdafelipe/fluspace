import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <section>
      <div className='loginContainer'>
        <h1>Login page</h1>
        <form>
          <div>
            <label>Mail</label>
            <input placeholder='lard@tumail.com' />
          </div>
          <div>
            <label>Mail</label>
            <input placeholder='lard@tumail.com' />
          </div>
          <div>
            <button>Ingresar</button>
          </div>
          <div>
            <button type='button'>Ingresar con Google</button>
          </div>
          <div>
            <button type='button'>Ingresar con Facebook</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
