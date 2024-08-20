import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import './Product.css'
import { FiHeart } from 'react-icons/fi';
import { GrOverview } from 'react-icons/gr';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchProducts } from './../redux/productsSlice';

const Product = () => {

  const dispatch = useDispatch()

  const { products } = useSelector(state => state.products)

  const productsAll = useSelector((state) => state.products.items);
  const isLoading = useSelector((state) => state.products.isLoading);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [isExpanded, setIsExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [apiCalled, setApiCalled] = useState(false);

  useEffect(() => {
    let interval;
    if (isLoading) {
      setProgress(0); // Reset progress to 0 when loading starts

      interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return oldProgress + 2; // Increment progress by 1%
        });
      }, 50); // Update every 50ms for smooth progress
    } else {
      setProgress(100); // Ensure it reaches 100% when loading is complete
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isLoading]);


  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to the top
    });
  }, []);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [])

  useEffect(() => {
    if (progress === 100 && !apiCalled) {
      // Call the API here
      console.log('Progress reached 100%. Now calling the API.');
      
      // Example API call
      Promise.resolve(dispatch(fetchProducts()))
      .then(() => setApiCalled(true))
      
      // Set apiCalled to true to prevent multiple API calls
      
    }
  }, [progress, apiCalled]);

  useEffect(() => {
    console.log('productsAll', productsAll)
  }, [productsAll])

  function add(val) {
    toast.success('Product Added to Cart', {
      autoClose: 2000,
      theme: 'light',
      transition: Slide,
    })
    dispatch(addToCart(val))
  };

  return (
    <>
      {
        isLoading || progress < 100 ?
            <div className="text-center mb-5 mt-5">
            <div className="spinner-container d-flex justify-content-center align-items-center">
              <div className="position-relative d-inline-flex">
                <div className="spinner-border text-danger" role="status" style={{ width: '4rem', height: '4rem' }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="position-absolute top-50 start-50 translate-middle" style={{ fontSize: '1rem', color: '#cc6666' }}>
                  {progress}%
                </div>
              </div>
            </div>
          </div> :
          <div className="container-fluid bg-second mb-3 product">
            <div className='heading heading-center mb-3'>
              <h1 className='title'>Featured Products</h1>
              <ul className='d-flex justify-content-center gap-5 pt-3 pb-3'>

                <li>
                  <a className='text-dark' style={{ fontSize: '30px' }} href="text">Womens Clothing</a>
                </li>

                <li>
                  <a className='text-dark' style={{ fontSize: '30px' }} href="text">Mens Clothing</a>
                </li>
              </ul>
            </div>
            <div className="container-fluid">
              <div className="item">
                <div className="row justify-content-center">
                  {
                    productsAll?.map((item) => {
                      return (
                        <div className='col-md-6 col-lg-3 col-xl-5col col-sm-12 mb-4 shadow-sm'>
                          <div className="card border-0" style={{ height: '90vh' }}>
                            <div className="product-img" style={{ objectFit: 'contain' }} >
                              <img src={item.image} className="card-img-top bg-white" alt="..." style={{ objectFit: 'contain', height: '50vh', width: '100%' }} />
                            </div>
                            <div className=" container card-img-overlay like gap-2 justify-content-between d-flex flex-row-reverse">
                              <div className="wishlist rounded-circle">
                                <FiHeart />
                              </div>
                              <div className="right">
                                <a className='text-white text-center' href=''>add to wishlist</a>
                              </div>
                              <div className="quick rounded-circle">
                                <GrOverview />
                              </div>
                            </div>

                            <div className="overlay mt-2" style={{ textAlign: 'center' }}>
                              <div className="card-body" style={{ textAlign: "center" }}>
                                <p className="card-title ">{item.category}</p>
                                <a className="card-text text-decoration-none text-dark">{item.title}</a>
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
            <ToastContainer />
          </div>
      }
    </>
  )
}

export default Product