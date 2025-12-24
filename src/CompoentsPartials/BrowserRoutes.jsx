import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Products from '../components/Products'
import About from '../components/About'
import Contact from '../components/Contact'
import Cart from '../components/Cart'

const BrowserRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
    </Routes>
    </>
  )
}

export default BrowserRoutes