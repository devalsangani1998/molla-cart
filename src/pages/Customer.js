import React from 'react'
import './Customer.css'
import { BsQuote } from 'react-icons/bs';

const Costumer = () => {
  return (
    <div className="container">
            <h2 className='title text-uppercase text-dark text-center mb-2 pt-5'>Our customer says</h2>
            <div className="css-16ph7t8">
              <div className="owl-carousel owl-theme owl-simple owl-testimonials owl-loaded owl-drag">
                <div className="owl-stage-outer">
                <blockquote className='testimonial testimonial-icon text-center'>
            <BsQuote/>
            </blockquote>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Costumer