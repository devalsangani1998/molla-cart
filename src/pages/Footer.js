import React from 'react'
import "./Footer.css"
import { BsArrowRight } from 'react-icons/bs';
// import { BiLogoFacebookCircle} from 'react-icons/bi';
const Footer = () => {
  return (
    <>
    <div className='footer container-fluid bg-dark color-secondary mt-5 pt-4 align-items-center pb-3' >
      <div className="row">
        <div className="col" style={{ width: "192.714px", border: "3px solid-gray" }}>
          <img src={require("./../components/assets/1.png")} alt="brand" className='h-23' />
        </div>
        <div className="col" style={{ width: "192.714px" }}>
          <img src={require("./../components/assets/2.png")} alt="brand" className='h-23' />
        </div>
        <div className="col" style={{ width: "192.714px" }}>
          <img src={require("./../components/assets/3.png")} alt="brand" className='h-34' />
        </div>
        <div className="col" style={{ width: "192.714px" }}>
          <img src={require("./../components/assets/4.png")} alt="brand" className='h-30' />
        </div>
        <div className="col" style={{ width: "192.714px" }}>
          <img src={require("./../components/assets/5.png")} alt="brand" className='h-39' />
        </div>
        <div className="col" style={{ width: "192.714px" }}>
          <img src={require("./../components/assets/6.png")} alt="brand" className='h-48' />
        </div>
        <div className="col" style={{ width: "192.714px" }}>
          <img src={require("./../components/assets/7.png")} alt="brand" className='h-23' />
        </div>
      </div>
    </div>

    <div className="container-fluid bg-dark pb-3 pt-5">
<div className="row">
  <div className="col-sm-12 col-lg-4">
    <img src={require("./../components/assets/logo-footer.png")} alt="footer-logo" style={{height:"27px"}}/>
    <p className='pt-3'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
  </div>
  
  <div className="col-sm-4 col-lg-2">
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
  <div className="col-sm-4 col-lg-2">
    <h4 className='widget-title'>CUSTOMER SERVICE</h4>
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
    <h4 className='widget-title'>MY ACCOUNT</h4>
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
    <h4 className='widget-title'>SIGN UP TO NEWSLETTER</h4>
   <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.</p>
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

  <div className="widget-about-info">
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <span className='widget-about-title'>Got Question? Call us 24/7</span><br />
        <a className='text-decoration-none ' href="tel:12345689">+0123 456 789</a>
      </div>
      <div className="col-sm-6 col-md-8">
    <span className='widget-about-title payment'>Payment Method</span><br />
    <img src={require("./../components/assets/payments.png")} alt="payment method" style={{height:"20", width:"272"}} className='pt-2'/>
  </div>
    </div>
  </div>

</div>
<div className="pt-4">
<hr style={{color:'gray'}} className='pt-4'/>
</div>
<div className="footer-end">
<div className="last d-flex gap-2 text-light">
  <p>Copyright © 2023 Molla Store. All Rights Reserved.</p>
    <a href="" className='text-secondary'>Terms of Use</a> |
    <a href="" className='text-secondary'>Privacy Policy</a>
  </div>
  <div className="social-media">
    <p>Social Media</p>
    {/* <BiLogoFacebookCircle/> */}
  </div>
  </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint dolor amet consequuntur repellat placeat unde ratione quo voluptatem voluptate! Ab enim vero minus reiciendis hic minima, nesciunt doloribus vel!</p>
    </>
  )
}

export default Footer