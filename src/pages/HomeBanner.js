import React from 'react'
import './Home.css'
// import { hover } from '@testing-library/user-event/dist/hover'
import { Link } from 'react-router-dom'


const HomeBanner = () => {
    return (
        <div className='container-fluid pt-1 home-banner'>
            <div className="row justify-content-center">
                < div className="col-lg-6 mt-1 container">
                    <div className="card home-img text-white">
                        <div className="image">
                        <img style={{ width: '100%', height: 'auto' }} src={require('./../components/assets/banner-1.jpg')} alt="background" />
                        </div>
                        <div className="card-img-overlay mt-5 banner-content pt-5 ">
                            <h5>NEW COLLECTION</h5>
                            <h1>SHOP WOMEN's</h1> 
                            <button className='btn underline text-white'>DISCOVER NOW</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-1 container ">
                    <div className="card home-img text-white ">
                        <img style={{ width: '100%', height: 'auto' }} src={require('./../components/assets/banner-2.jpg')} alt="background" />
                        <div className="card-img-overlay mt-5 banner-content pt-5   ">
                            <h5>NEW COLLECTION</h5>
                            <h1>SHOP MEN'S</h1>
                            <button className='btn underline text-white'>DISCOVER NOW</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mt-1">
            <div className="col-lg-4 mt-1 container">
                        <div className="card home-img text-white">
                            <img style={{ width: '100%', height: 'auto' }} src={require('./../components/assets/banner-3.jpg')} alt="background" />
                            <div className="card-img-overlay mt-5 banner-content text-uppercase">
                                <Link className='accessories' style={{hover:{color:'#dc3545'}}}>Flip Flop</Link><br />
                                <Link className='accessories'>Summer Sale - 70% OFF</Link><br />
                                <Link className='btn shop-btn underline text-white' to='/product'>SHOP NOW</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-1 container ">
                        <div className="card home-img text-white">
                            <img style={{ width: '100%', height: 'auto' }} src={require('./../components/assets/banner-4.jpg')} alt="background" />
                            <div className="card-img-overlay mt-5 banner-content text-uppercase">
                                <Link className='accessories'>Accessories</Link><br />
                                <Link className='accessories'>2019 winter up to 50% OFF</Link><br />
                                <Link className='btn underline text-white' to="/product">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-1 container ">
                        <div className="card home-img text-white align-items-center">
                            <img style={{ width: '100%', height: 'auto' }} src={require('./../components/assets/banner-5.jpg')} alt="background" />
                            <div className="card-img-overlay mt-5 banner-content text-uppercase">
                                <Link className='accessories'>NEW IN</Link><br />
                                <Link className='accessories'>Womens sports wears</Link><br />
                                <Link className='btn underline text-white' to="/product">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>



    )
}

export default HomeBanner