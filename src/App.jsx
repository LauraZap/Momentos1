import React from 'react'
import Registro from './Components/Registrarse'
import InicioSesion from './Components/InicioSesion'
import './App.css'

function App() {

  return (
    <>
        <div>
        <h1>Registro</h1>
        <Registro></Registro>
      </div>
      <div>
        <h1>Inicio de Sesion</h1>
        <InicioSesion />
      </div>
      
    </>
  )
}

export default App
