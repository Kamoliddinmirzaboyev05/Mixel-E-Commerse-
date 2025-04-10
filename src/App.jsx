import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Dashboard from './pages/dashboard/Dashboard'
import PhoneFiltr from './pages/phoneFiltr/PhoneFiltr'
import ProductCard from './components/productCard/ProductCard'
import ProductPanel from './components/productPanel/ProductPanel'
import ProductBox from './components/productBox/ProductBox'
import PhoneFiltrAlot from './pages/phoneFiltrAlot/PhoneFiltrAlot'
import Product from './pages/product/Product'
import Liked from './pages/liked/Liked'
import Comparison from './pages/comparison/Comparison'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productCard' element={<ProductCard />} />
        <Route path='/productPanel' element={<ProductPanel />} />
        <Route path='/productBox' element={<ProductBox />} />
        <Route path='/phoneFiltr' element={<PhoneFiltr />} />
        <Route path='/phoneFiltrAlot' element={<PhoneFiltrAlot/>}/>
        <Route path='/product' element={<Product />} />
        <Route path='/liked' element={<Liked/>} />
        <Route path='/comparison' element={<Comparison/>} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App