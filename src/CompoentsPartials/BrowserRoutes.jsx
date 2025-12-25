import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Products from '../components/Products'
import About from '../components/About'
import Contact from '../components/Contact'
import Cart from '../components/Cart'
import ItemDetails from '../components/ItemDetails'

const BrowserRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category/:title" element={<ItemDetails />} />  {/* ✅ Cleaner */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default BrowserRoutes