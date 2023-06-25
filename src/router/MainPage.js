import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
// import Shop from './Shop'
import Product from '../components/Product'
import Blog from '../components/Blog'
import Header from './Header'
import Cart from './Cart'

const MainPage = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            {/* <Route path='/shop' element={<Shop/>} /> */}
            <Route path='/product' element={<Product/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/cart' element = {<Cart/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MainPage