import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import BrowserRoutes from './CompoentsPartials/BrowserRoutes'
import NavBar from './CompoentsPartials/NavBar'

const App = () => {
  return (
    <>

    <NavBar/>

<BrowserRoutes/>
   
    </>
  )
}

export default App