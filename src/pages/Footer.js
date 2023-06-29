import React from 'react'
import "./Footer.css"
import { BsArrowRight } from 'react-icons/bs';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsPinterest} from 'react-icons/bs';
const Footer = () => {
  return (
    <>
    <div className='footer brands-border container-fluid bg-dark color-secondary mt-2 align-items-center pb-3' >
      <div className="row">
        <div className="col brand" style={{ width: "192.714px" }}>
          <a className='bg-dark border-0' href=''>
          <img src={require("./../components/assets/1.png")} alt="brand" className='h-23' />
          </a>
        </div>
        <div className="col brand" style={{ width: "192.714px" }}>
        <button className='bg-dark border-0'>
          <img src={require("./../components/assets/2.png")} alt="brand" className='h-23' />
          </button>
        </div>
        <div className="col brand" style={{ width: "192.714px" }}>
        <button className='bg-dark border-0'>
          <img src={require("./../components/assets/3.png")} alt="brand" className='h-34' />
          </button>
        </div>
        <div className="col brand" style={{ width: "192.714px" }}>
        <button className='bg-dark border-0'>
          <img src={require("./../components/assets/4.png")} alt="brand" className='h-30' />
          </button>
        </div>
        <div className="col brand" style={{ width: "192.714px" }}>
        <button className='bg-dark border-0'>
          <img src={require("./../components/assets/5.png")} alt="brand" className='h-39' />
          </button>
        </div>
        <div className="col brand" style={{ width: "192.714px" }}>
        <button className='bg-dark border-0'>
          <img src={require("./../components/assets/6.png")} alt="brand" className='h-48' />
          </button>
        </div>
        <div className="col brand" style={{ width: "192.714px" }}>
        <button className='bg-dark border-0'>
          <img src={require("./../components/assets/7.png")} alt="brand" className='h-23' />
          </button>
        </div>
      </div>
    </div>

    <div className="container-fluid bg-dark pb-3 pt-5">
<div className="row">
  <div className="col-sm-12 col-lg-4">
    <img src={require("./../components/assets/logo-footer.png")} alt="footer-logo" style={{height:"27px"}}/>
    <p className='pt-3 logo-para'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
    <div className="widget-about-info pt-3 pb-4">
      <div className="row">
        <div className="col-sm-6 col-md-4">
<span className='widget-about-title'>Got Question? Call us 24/7</span><br />
<a href="tel:123456789" style={{textDecoration:"none"}}>+0123 456 789</a>
        </div>
        <div className="col-sm-6 col-md-8">
          <span className='widget-about-title payment'>Payment Method</span>
          <img src={require("./../components/assets/payments.png")} alt="payment methods" style={{height:"20", width:"272"}} />
        </div>
      </div>
    </div>
  </div>
  
  <div className="col-sm-4 col-lg-2">
    <div className="widget">
    <h5 className='widget-title'>USEFUL LINKS</h5>
    <ul className='widget-list'>
      <li>
        <a href="about">About Molla</a>
      </li>
      <li>
        <a href="about">How to shop on molla</a>
      </li>
      <li>
        <a href="about">FAQ</a>
      </li>
      <li>
        <a href="about">Contact us</a>
      </li>
      <li>
        <a href="about">Log in</a>
      </li>
    </ul>
    </div>
  </div>
  <div className="col-sm-4 col-lg-2">
    <h5 className='widget-title'>CUSTOMER SERVICE</h5>
    <ul className='widget-list'>
      <li>
        <a href="about">Payment Methods</a>
      </li>
      <li>
        <a href="about">Money-back gaurantee! </a>
      </li>
      <li>
        <a href="about">Returns</a>
      </li>
      <li>
        <a href="about">Shipping</a>
      </li>
      <li>
        <a href="about">Terms and conditions</a>
      </li>
      <li>
        <a href="about">Privacy policy</a>
      </li>
    </ul>
  </div>
  <div className="col-sm-4 col-lg-2">
    <h5 className='widget-title'>MY ACCOUNT</h5>
    <ul className='widget-list'>
      <li>
        <a href="about">Sign In</a>
      </li>
      <li>
        <a href="about">View Cart</a>
      </li>
      <li>
        <a href="about">My Wishlist</a>
      </li>
      <li>
        <a href="about">Track My Order</a>
      </li>
      <li>
        <a href="about">Help</a>
      </li>
    </ul>
  </div>
  <div className="col-sm-4 col-lg-2">
    <div className="widget widget-newsletter">
    <h5 className='widget-title'>SIGN UP TO NEWSLETTER</h5>
   <p className='logo-para'>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.</p>
   <form action="#" className='pt-3'>
    <div className="input-group">
      <input type="email" className='form-control' placeholder='Enter Your Email Address' aria-label='Email Adress' required />
      <div className="input-group-append">
        <button className='btn btn-dark' type='submit'>
          <BsArrowRight/>
        </button>
      </div>
    </div>
   </form>
   </div>
  </div>
</div>
<div className="pt-4">
<hr style={{color:'gray'}} className='pt-4'/>
</div>
<div className="footer-bottom justify-content-between">
 <div className="container-fluid d-flex align-items-center"> 
 <div className="row">
  <div className="col-lg-4 d-flex footer-copyright">
<p style={{fontSize:"17px" , marginLeft:"0"}}>Copyright © 2023 Molla Store. All Rights Reserved.</p>
</div>
<div className="col-lg-4 d-flex">
  <ul className='footer-menu d-flex'>
    <li><a href="#" className='text-secondary menu' style={{fontSize:"17px"}}>Terms of Use</a> ||</li>
    <li> <a href="#" className='text-secondary menu' style={{fontSize:"17px"}}>Privacy Policy</a></li>
  </ul>
  </div>
  <div className="col-lg-4 ">
      <div className="social-icons d-flex gap-2">
    <p style={{fontSize:"17px"}}>Social Media</p>
    <a href="">
    <BsFacebook className='bg-dark text-primary'/>
    </a>
    <a href="">
    <BsTwitter className='bg-dark text-primary'/>
    </a>
    <a href="">
      <BsInstagram/>
    </a>
    <a href="">
      <BsYoutube/>
    </a>
    <a href="">
      <BsPinterest/>
    </a>
  </div>
  </div>
  </div>
  </div>
  </div>
    </div>
    </>
  )
}

export default Footer