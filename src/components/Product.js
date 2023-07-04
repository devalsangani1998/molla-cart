import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import './Product.css'
import { FiHeart } from 'react-icons/fi';
import { GrOverview } from 'react-icons/gr';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {

  const dispatch = useDispatch()

  const { products } = useSelector(state => state.products)

  function add(val) {
    toast.success('Add Successfully in to Cart',{
autoClose:2000,
theme:'light',
transition:Slide,
    })
    dispatch(addToCart(val))
  };





  return (
    <div className="container-fluid bg-second mt-3 mb-3 product">
      <div className='heading heading-center mb-3'>
        <h1 className='title'>Featured Products</h1>
        <ul className='d-flex justify-content-center gap-5 pt-3 pb-3'>

          <li>
            <a className='text-dark' style={{fontSize:'30px'}} href="text">Womens Clothing</a>
          </li>

          <li>
            <a className='text-dark' style={{fontSize:'30px'}} href="text">Mens Clothing</a>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <div className="item">
          <div className="row justify-content-center">
            {
              products.map((item) => {
                return (
                  <div className='col-6 col-md-4 col-lg-3 col-xl-5col mt-2'>
                    <div className="card border-0 h-auto"  style={{height:'50vh'}}>
                      <div className="product-img" >
                        <img src={item.img} className="card-img-top bg-white" alt="..." style={{height:'40vh', width:'100%'}} />
                      </div>
                      <div className=" container card-img-overlay like gap-2 justify-content-between d-flex flex-row-reverse">
                        <div className="wishlist rounded-circle">
                          <FiHeart />
                        </div>
                        <div className="right">
                          <a className='text-white' href=''>add to wishlist</a>
                        </div>
                        <div className="quick rounded-circle">
                        <GrOverview />
                      </div>
                      </div>
                      
                      <div className="overlay" style={{ textAlign: 'center' }}>
                        <div className="card-body" style={{ textAlign: "center" }}>
                          <p className="card-title ">{item.category}</p>
                          <a className="card-text text-decoration-none text-dark">{item.name}</a>
                          <p className='mt-2' style={{ color: '#cc6666', textAlign: 'center' }}>${item.price}</p>
                          <button className='border-0 add-btn' onClick={() => add(item)}>ADD-TO CART</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Product