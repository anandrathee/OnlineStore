import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Products from '../components/Products'
import About from '../components/About'
import Contact from '../components/Contact'

const BrowserRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default BrowserRoutes