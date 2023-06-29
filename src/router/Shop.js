import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/CartSlice'

const Shop = () => {

  const dispatch = useDispatch()

  const { products } = useSelector(state => state.products)


  function add(val) {
    dispatch(addToCart(val))
  }

  return (
    <div className="container-fluid mt-5">
      <div className='heading heading-center mb-3'>
        <h1 className='title'>New Arrivels</h1>
        <ul className='d-flex justify-content-center gap-5 pt-3 pb-3'>

          <li>
            <Link className='text-dark display-3' to="/product">Womens Clothing</Link>
          </li>

          <li>
            <Link className='text-dark display-6 underline' to="/product">Mens Clothing</Link>
          </li>
        </ul>
      </div>
      <div className="row justify-content-center align-items-center">
        {
          products.map((item) => {
            return (
              <div className='col-6 col-s-4 col-lg-3 col-xl-5col'>
                <div className="card border-0 h-auto">
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-title">{item.category}</p>
                    <Link className="card-text text-decoration-none text-dark">{item.name}</Link>
                    <p style={{ color: '#cc6666' }}>${item.price}</p>
                    <button onClick={() => add(item)}>ADD-TO CART</button>
                  </div>
                </div>
              </div>
            )
          })
        }


      </div>
      <div className="text-center">
        <Link to="" className='btn btn-light text-dark border-1 mb-3  button'>Shop More</Link>
      </div>
    </div>

  )
}

export default Shop