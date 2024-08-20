import React, { useEffect } from 'react'
import "./../components/contact.css"

const About = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to the top
    });
  }, []);

  return (
  <>
  <div className="container mt-3">
    <div className="page-header page-header-big">
        <img src={require("./../components/assets/about-us.jpg")} alt="bg-img" style={{width:'100%'}} />
        <h1 className='text-light'>About Us</h1>
    </div>
  </div>

  <div className="page-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-2 mb-lg-0">
          <h2 className="title mb-1">Our Visison</h2>
          <p className='mb-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
        </div>
        <div className="col-lg-6">
          <h2 className='title mb-1'>Our Mission</h2>
          <p className='mb-3'>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. <br />
          Praesent elementum hendrerit tortor. Sed semper lorem at felis.
          </p>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default About