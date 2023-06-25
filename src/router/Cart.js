import React from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../redux/CartSlice'

const Cart = () => {

    const dispatch = useDispatch ()

    const { cart, total } = useSelector(state => state.cart)
 
    function remove (val) {
        dispatch(removeCart(val))
    }

    return (
        <div className='container-fluid mt-3'>
    
                <div className='d-flex justify-content-center bg-second'>
                    <h1 className='pt-5'>Shopping Cart</h1>
                    </div>
                <div className="container mt-4">
                <h1 className='mt-3 mb-4 total-count' style={{color:"#cc6666"}}>Total : ${total}</h1>

                           {
                                cart.map((item) => {
                                    return (
                                        <div className='gap-4'>
                                            <img src={item.img} alt="" />
                                            <div className='align-items-center'>
                                            <p style={{color:"#cc6666"}}>{item.name}</p>
                                            <p>${item.price}</p>
                                            <p>{item.quantity}</p>
                                            <p style={{color:"#cc6666"}}>${item.price * item.quantity}</p>
                                            <button className='border-0 remove-btn' onClick={() => remove(item)}>Remove Cart</button>
                                            </div>
                                        </div>
                                         )
                                })
                            }

                        </div>
                        
                    </div>
                  
            
            
        

    )
}

export default Cart