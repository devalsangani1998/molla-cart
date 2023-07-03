import React from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../redux/CartSlice'
import { MdDelete } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { Link } from 'react-router-dom';



const Cart = () => {

    const dispatch = useDispatch()

    const { cart, total } = useSelector(state => state.cart)

    function remove(val) {
        dispatch(removeCart(val))
    }


    return (
        <>
       
            <section className='container-fluid cart-banner'>
                <img src={require("./../components/assets/cart-bg.jpg")} style={{ width: "100%" , height:"30vh"}} alt="" />
                <div className="card-img-overlay py-5">
                    <h1 className='pt-5 text-dark' style={{ textAlign: "center" }}>Shopping Cart</h1>
                    <h4 style={{ textAlign: "center", color: "#c66" }}>Shop</h4>
                </div>
            </section>
            <section className='container py-5'>
                <div className="page-content">
                    <div className="cart">
                        <div className="mt-4">
                            <div className="row">
                                <div className="col-lg-9">
                                    <table className='table z-1'>
                                        <thead>
                                            <tr className='shop-detail'>
                                                <th className=''>Product</th>
                                                <th className=''>Name</th>
                                                <th className=''>Price</th>
                                                <th className=''>Qauntity</th>
                                                <th className=''>Total</th>
                                                <th className=''>Remove Item</th>
                                            </tr>
                                        </thead>


                                        {/* <h1 className='mt-3 mb-4 total-count' style={{ color: "#cc6666" }}>Total : ${total}</h1> */}

                                        {
                                            cart.map((item) => {
                                                return (
                                                    <tr className='shop-detail'>
                                                        <td className='product-col d-flex gap-3 align-items-center' style={{ textAlign: "center" }}>
                                                            <div className="product d-flex">
                                                                <img src={item.img} alt="" style={{ width: "80px", height: "80px" }} />

                                                            </div>

                                                        </td>
                                                        <td className='name-col' ><p style={{ fontSize: "1.3vw", color:'black', fontWeight:'350' }}>{item.name}</p></td>

                                                        <td className='price-col'>
                                                            <p style={{ fontSize: "1.3vw", color:'black', fontWeight:'350'}}>${item.price}</p>
                                                        </td>
                                                        <td className='quantity-col'>
                                                            <p style={{ fontSize: "1.3vw", color:'black', fontWeight:'350' }}>{item.quantity}</p>
                                                        </td>
                                                        <td className='total-col'>
                                                            <p style={{ fontSize: "1.3vw", color:'#cc6666', fontWeight:'350' }}>${item.price * item.quantity}</p>
                                                        </td>
                                                        <td>
                                                            <button className='remove-btn' onClick={() => remove(item)}>
                                                                    <MdDelete style={{ fontSize: "1.7vw" }}/>
                                                                </button>
                                                        </td>

                                                    </tr>



                                                )
                                            })
                                        }
                                    </table>
                                </div>
                                <div className="col-lg-3">
                                    <div className="summary summary-cart">
                                        <h3 className='summary-title'>Cart Total</h3>
                                        <table className='table table-summary'>
                                            <tbody>
                                                <tr className='summary-subtotal'>
                                                    <td>Subtotal:</td>
                                                    <td>${total}</td>
                                                </tr>
                                                <tr className='summary-shipping'>
                                                    <td>Shipping:</td>
                                                </tr>
                                                <tr className='summary-shipping-row'>
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" name='cart' className='custom-control-input' value='free-shipping' />
                                                            <label  className='custom-control-label'>
                                                                Free Shipping
                                                            </label>
                                                        </div>

                                                    </td>
                                                    <td className='shipping-charge'>$0.00</td>
                                                </tr>
                                                <tr className='summary-shipping-row'>
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" name='cart' className='custom-control-input' value='standard-shipping' />
                                                            <label htmlFor="standard-shipping" className='custom-control-label'>
                                                                Standard:
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className='shipping-charge'>$10.00</td>
                                                </tr>
                                                <tr className='summary-shipping-row'>
                                                    <td>
                                                        <div className='custom-control custom-radio'>
                                                            <input type="radio" name='cart' className='custom-control-input' value='express-shipping' />
                                                            <label htmlFor="express-shipping" className='custom-control-label'>
                                                                Express:
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className='shipping-charge'>$20.00</td>
                                                </tr>
                                                <tr className='summary-shipping-estimate'>
                                                    <td className='estimate'>
                                                        Estimate For Your Country <br />
                                                        <a href="adress" className='adress'>Change adress</a>
                                                    </td>
                                                </tr>
                                                <tr className='summary-total'>
                                                    <td>
                                                        Total:
                                                    </td>
                                                    <td>${total}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className='proceed-check'>
                                        <a href="proceed" className='btn btn-outline-primary-2 btn-border btn-block d-flex'>PROCEED TO CHECKOUT</a>
                                        </div>
                                    </div>
                                    <div className='cont-ship'>               
                                 <Link to="/product" className='btn btn-outline-dark-2 btn-block mb-3 d-flex gap-2'>CONTINUE SHOPPING
                                    <HiOutlineRefresh className='refresh-icon'/>
                                    </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>



    )
}

export default Cart