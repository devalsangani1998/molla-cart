import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../components/Product'
import Blog from '../components/Blog'
import Header from './Header'
import Cart from './Cart'
import Contact from '../components/Contact'
import About from '../pages/About'

const MainPage = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/cart' element = {<Cart/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MainPage